from PIL import Image
import numpy as np

# Open the green logo
img = Image.open('script-logo-green.png').convert('RGBA')
data = np.array(img)

# Target color: rgb(63, 46, 30) - the brown color
target_r, target_g, target_b = 63, 46, 30

# Get the RGB channels
red, green, blue, alpha = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]

# Replace non-transparent pixels with the new color while preserving alpha
mask = alpha > 0
data[:,:,0][mask] = target_r
data[:,:,1][mask] = target_g
data[:,:,2][mask] = target_b

# Create new image
new_img = Image.fromarray(data, 'RGBA')
new_img.save('script-logo-brown.png')
print("Logo recolored to brown successfully!")