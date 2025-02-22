import {jsPDF} from "jspdf";
import "jspdf-autotable"; // Import autoTable plugin

const PDFexport = (config, data) => {
  // Initialize jsPDF with portrait orientation and A4 paper size
  const doc = new jsPDF({
    orientation: config.orientation, // Change to "portrait" if needed
    unit: config.unit, //
    format: config.paperSize, //
  }); // 'p' for portrait, 'a4' for A4 size

  const fontSize = config.orientation === "portrait" ? 8 : 10;
  // Get the page width dynamically
  const pageWidth = doc.internal.pageSize.getWidth();

  // Add school name and other details
  doc.setFontSize(16); // Set font size for the heading
  doc.setFont("helvetica", "bold");
  doc.text(data.schoolName, pageWidth / 2, 10, {align: "center"});

  doc.setFontSize(fontSize); // Set smaller font size for other details
  doc.text(`Ph: ${data.schoolPhone}`, 18, 18);
  doc.text(`Email: ${data.schoolEmail}`, pageWidth / 2, 18, {
    align: "center",
  });
  doc.text(`Proprietor: ${data.schoolProprietor}`, pageWidth - 18, 18, {
    align: "right",
  });

  // Add a horizontal line just below the address
  doc.setLineWidth(0.5); // Set line width
  doc.line(15, 21, pageWidth - 15, 21); // Draw a line from x=10 to x=pageWidth-10 at y=22

  // Add class and total students section
  doc.text(data.title, 15, 37); // Left-aligned text
  doc.text(`Total Students: ${data.totalStudents}`, pageWidth - 15, 37, {
    align: "right",
  }); // Right-aligned text

  // Define table styles
  const tableStyles = {
    headStyles: {
      fillColor: [0, 128, 0], // Green header background
      textColor: [255, 255, 255], // White text color
      halign: "center", // Horizontal alignment for header
    },
    bodyStyles: {
      halign: "center", // Horizontal alignment for body cells
    },
    columnStyles: {
      0: {cellWidth: 15}, // S.No column width
      1: {cellWidth: 40}, // Name column width
      2: {cellWidth: 50}, // Address column width
      3: {cellWidth: 40}, // Phone(s) column width
      4: {cellWidth: 40}, // Comments column width
    },
    // Starting Y position for the table (increased this value for spacing)
  };

  // Add the table using autoTable
  doc.autoTable({
    startY: 45,
    theme: "grid",
    head: [data.headers], // Table header
    body: data.list, // Table body (student data)
    styles: tableStyles, // Table styling options
    margin: {top: 10}, // Add margin at the top of the page
  });

  // Save or output the PDF
  doc.save("students_list.pdf");
};

export default PDFexport;