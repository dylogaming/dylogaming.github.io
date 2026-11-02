import json, pathlib, re, sys, time, urllib.request

ROOT = pathlib.Path(__file__).parent
OUT = ROOT / "counts.json"
counts = json.loads(OUT.read_text(encoding="utf-8")) if OUT.exists() else {}
failed = []


def get(url, **headers):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0", "Accept-Language": "en-US", **headers})
    return urllib.request.urlopen(req, timeout=20).read().decode("utf-8")


try:
    m = re.search(r'"content":"([0-9.,]+[KM]?) subscribers"', get("https://www.youtube.com/@DYLOGaming"))
    if not m:
        raise ValueError("subscriber text not found")
    counts["yt"] = m.group(1)
except Exception as e:
    failed.append(f"youtube: {e}")

try:
    n = json.loads(get("https://discord.com/api/v9/invites/AB65GBxFNT?with_counts=true"))["approximate_member_count"]
    counts["dc"] = f"{n:,}"
except Exception as e:
    failed.append(f"discord: {e}")

counts["at"] = time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())
OUT.write_text(json.dumps(counts, indent=1), encoding="utf-8")
print(counts, *failed, sep="\n")
sys.exit(1 if failed else 0)
