import fitz  # PyMuPDF
import os

# Convert PDF to image
pdf_path = "public/certificate-leap.pdf"
output_path = "public/certificate-leap.png"

if os.path.exists(pdf_path):
    # Open the PDF
    doc = fitz.open(pdf_path)
    
    # Get first page
    page = doc[0]
    
    # Render to image with 2x zoom for high quality
    mat = fitz.Matrix(2, 2)
    pix = page.get_pixmap(matrix=mat)
    
    # Save as PNG
    pix.save(output_path)
    doc.close()
    
    print(f"Certificate converted successfully: {output_path}")
else:
    print(f"PDF not found: {pdf_path}")
