# Adding Images to Your Portfolio

## How to Add Images

Each artifact card can display an image when expanded. The images are specified using the `data-image` attribute in the HTML.

### Step 1: Prepare Your Images

1. **Location**: Place all artifact images in `assets/images/`
2. **Format**: Use JPG, PNG, or any web-compatible format
3. **Size**: Images will be displayed as squares (300x300px mobile, 350x350px desktop)
4. **Cropping**: The CSS uses `object-fit: cover` which automatically crops images to fill the square
   - The image will be centered by default
   - If you want a specific part of the image shown, crop it to a square before uploading for best results

### Step 2: Update the HTML

Each artifact has a `data-image` attribute. Simply replace the filename with your actual image:

```html
<section class="artifact" data-image="assets/images/YOUR_IMAGE.jpg">
```

### Current Image Mappings

| Artifact | Current Filename | Status |
|----------|-----------------|--------|
| ITC110 | `unitydev_artifact_img.png` | ✓ Added |
| SWE1 | `swe1_artifact_img.png` | ✓ Added |
| Embedded Systems | `embedsys_artifact_img.png` | ✓ Added |
| AI | `ai_artifact_img.jpeg` | ✓ Added |
| Sing Song | `singsong_artifact_img.jpg` | ✓ Added |
| Debate | `debate_artifact_img.jpg` | ✓ Added |
| UCC | No image | - |
| Internship | No image | - |

**Note**: UCC and Internship artifacts have no images by design.

### Step 3: Upload to GitHub

After adding your images:

```bash
git add assets/images/
git commit -m "Add artifact images"
git push
```

## Adjusting Image Position/Cropping

Images use CSS `object-fit: cover` which automatically crops them to fill the square container. By default, images are centered both horizontally and vertically.

### To adjust which part of the image shows:

In `styles.css`, find `.artifact-image img` and modify the `object-position` property:

**Examples:**
```css
object-position: center center;  /* Default - centered (current) */
object-position: center top;     /* Show the top portion */
object-position: center bottom;  /* Show the bottom portion */
object-position: left center;    /* Show the left side */
object-position: right center;   /* Show the right side */
object-position: 30% 20%;        /* Custom positioning (30% from left, 20% from top) */
```

### Per-image positioning:

If you need different positioning for each image, add inline styles in the HTML:

```html
<section class="artifact" data-image="assets/images/example.jpg" data-position="center top">
```

Then modify the JavaScript in `script.js` to read and apply this attribute.

## Tips for Best Results

- **Square images** work best (1:1 aspect ratio)
- **Minimum resolution**: 700x700px for crisp display
- **File size**: Keep under 500KB for fast loading
- **Focus point**: Make sure the important part of your image is in the center, or adjust `object-position`
- **Click images**: Clicking an image opens a full-size lightbox view

## Removing an Image

If you don't want an image for a specific artifact, simply remove the `data-image` attribute from that `<section>` tag.
