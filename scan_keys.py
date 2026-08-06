import re, glob, json

pat = re.compile(r't\(\s*"([^"]*)"\s*\)')
kpat = re.compile(r'^  "([^"]*)":', re.M)

keys = set()
for f in glob.glob('src/**/*.jsx', recursive=True):
    s = open(f, encoding='utf-8').read()
    for m in pat.finditer(s):
        keys.add(m.group(1))

have = set()
for f in ['src/i18n/ui.js', 'src/i18n/pages.js']:
    s = open(f, encoding='utf-8').read()
    for m in kpat.finditer(s):
        have.add(m.group(1))

missing = sorted(keys - have)
print("t() keys:", len(keys), "have:", len(have), "missing:", len(missing))
json.dump(missing, open('missing.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
for k in missing:
    print('-', k)
