import fitz
from PIL import Image
from collections import Counter

doc = fitz.open('website.pdf')
page = doc[0]
mat = fitz.Matrix(2, 2)
pix = page.get_pixmap(matrix=mat)
pix.save('.sample.png')

img = Image.open('.sample.png').convert('RGB')
w, h = img.size
colors = Counter()
for y in range(0, min(h, 1700), 2):
    for x in range(0, w, 2):
        r, g, b = img.getpixel((x, y))
        if r > 180 and g < 90 and b < 90:
            colors[(r, g, b)] += 1

print("Top red colors found:", colors.most_common(10))
