"""Small Python helper of the demo app: imports its dependencies so reachability sees them."""
import requests
import yaml
from jinja2 import Template


def render(cfg_text: str) -> str:
    cfg = yaml.safe_load(cfg_text)
    return Template("Report for {{ name }}").render(name=cfg.get("name", "demo"))


def fetch(url: str) -> int:
    return requests.get(url, timeout=5).status_code
