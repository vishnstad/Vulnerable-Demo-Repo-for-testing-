# sscg-demo-app

Demo target for Supply Chain Guardian. **Deliberately insecure, not malicious.** Nothing here sends data anywhere.

| What | Where | Finding kind |
|---|---|---|
| Outdated npm packages with published CVEs (lodash, express, jsonwebtoken, handlebars, minimist, axios) | `package.json`, `package-lock.json` | Vulnerabilities |
| Outdated Python packages with CVEs (requests, PyYAML, Jinja2, urllib3) | `requirements.txt` | Vulnerabilities |
| Install script added in the latest commit, with secret-reading / network patterns (comments only) | `package.json` `postinstall`, `scripts/setup.js` | Suspicious change |
| New dependency added in the latest commit | `package.json` | Suspicious change |
| `pull_request_target` + head checkout, unpinned third-party action, `curl \| bash`, `write-all`, secret in env | `.github/workflows/ci.yml` | Suspicious (CI) |
| Mutable base image tag, remote script piped to shell | `Dockerfile` | Suspicious (container) |

`npm test` runs offline, so the sandbox can build and test before and after the fixes.
