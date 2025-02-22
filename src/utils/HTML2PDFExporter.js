import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const HTML2PDF = (
  html,
  fileName = "document.pdf"
) => {
  if (!html) {
    console.error("Editor content is empty.");
    return;
  }

  // Create a temporary DOM element to hold the content
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  tempDiv.style.width = "210mm"; // A4 width
  tempDiv.style.padding = "10px";
  document.body.appendChild(tempDiv);

  // Render the HTML content to a canvas and convert to PDF
  html2canvas(tempDiv, {scale: 2}).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4"); // Portrait, mm unit, A4 size

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 10, 10, pdfWidth - 20, pdfHeight);
    pdf.save(fileName);

    // Clean up the temporary DOM element
    document.body.removeChild(tempDiv);
  });
};

export default HTML2PDF;