import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import frontendIMG from '../assets/frontend.png';
import javaIMG from '../assets/java.png';
import alxIMG from '../assets/professional foundations.jpeg';
import ukznIMG from '../assets/ukzn.png';
import SectionTitle from './SectionTitle';
// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const certifications = [
  {
    id: 1,
    title: 'Java Programming',
    issuer: 'Pirple.com',
    date: 'August 2022',
    pdfUrl: '../assets/Mthobisi Snalo Cele - 2022-08-17.pdf',
    previewImage: javaIMG
  },
  {
    id: 2,
    title: 'Professional Foundations',
    issuer: 'African Leadership Experience',
    date: 'August 2024',
    pdfUrl: '../assets/professional foundations.pdf',
    previewImage: alxIMG
  },
  {
    id: 3,
    title: 'Front-End Development',
    issuer: 'African Leadership Experience',
    date: 'October 2024',
    pdfUrl: '../assets/69-front-end-web-development-certificate-mthobisi-snalo-cele.pdf',
    previewImage: frontendIMG
  },
  {
    id: 4,
    title: 'UKZN Tech Society Membership',
    issuer: 'UKZN Tech Society',
    date: 'November 2023',
    pdfUrl: '../assets/Mthobisi SnaloCele.pdf',
    previewImage: ukznIMG
  }
];

const CertificationCard = ({ cert, onClick }) => {
  return (
    <div 
      className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all"
      onClick={onClick}
    >
      <img 
        src={cert.previewImage} 
        alt={cert.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
        <p className="text-gray-400 mb-1">{cert.issuer}</p>
        <p className="text-gray-500 text-sm">{cert.date}</p>
        <button className="mt-4 text-blue-400 hover:text-blue-300 text-sm">
          View Certificate →
        </button>
      </div>
    </div>
  );
};

const PDFModal = ({ pdfUrl, onClose }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-lg p-4 max-w-3xl w-full max-h-[90vh] overflow-auto">
        <div className="flex justify-between mb-4">
          <h3 className="text-white text-lg">Certificate Preview</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>
        
        {isLoading && (
          <div className="flex justify-center items-center py-10">
            <div className="text-white">Loading certificate...</div>
          </div>
        )}

        {error && (
          <div className="text-red-400 text-center py-10">
            Failed to load PDF. Please try again later.
          </div>
        )}

        <Document
          file={pdfUrl}
          onLoadSuccess={({ numPages }) => {
            setNumPages(numPages);
            setIsLoading(false);
            setError(null);
          }}
          onLoadError={(error) => {
            console.error('Error loading PDF:', error);
            setIsLoading(false);
            setError(error);
          }}
          className="flex justify-center"
        >
          <Page 
            pageNumber={pageNumber} 
            renderTextLayer={false}
            className="max-w-full"
            scale={1.0}
            loading={
              <div className="text-white text-center py-4">
                Loading page...
              </div>
            }
          />
        </Document>

        {numPages > 1 && !isLoading && !error && (
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
              disabled={pageNumber <= 1}
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-white">
              Page {pageNumber} of {numPages}
            </span>
            <button
              onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))}
              disabled={pageNumber >= numPages}
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="max-w-6xl mx-auto py-20 px-4">
      <SectionTitle title="Certifications" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <CertificationCard
            key={cert.id}
            cert={cert}
            onClick={() => setSelectedCert(cert)}
          />
        ))}
      </div>

      {selectedCert && (
        <PDFModal
          pdfUrl={selectedCert.pdfUrl}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  );
};

export default Certifications;
