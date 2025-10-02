"use client";

import { pdfjs, Document, Page } from "react-pdf";
import { useState } from "react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Cấu hình worker (đường dẫn trong /public)
pdfjs.GlobalWorkerOptions.workerSrc = "/config/pdf.worker.min.mjs";

export default function CVPreview() {
  const [numPages, setNumPages] = useState<number | null>(null);

  return (
    <div className="h-full flex justify-center">
      <Document
        file="/pdfs/PhanCongChau_CV_FE_Intern.pdf"
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        <Page
          pageNumber={1}
          renderAnnotationLayer={false}
          renderTextLayer={false}
          scale={0.9}
        />
      </Document>
    </div>
  );
}
