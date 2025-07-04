import { useState } from 'react';
import frontendIMG from '../assets/frontend.png';
import javaIMG from '../assets/java.png';
import alxIMG from '../assets/professional foundations.jpeg';
import ukznIMG from '../assets/ukzn.png';
import SectionTitle from './SectionTitle';
import csharpcert from '../assets/freecodecamp.png';

const certifications = [
  {
    id: 1,
    title: 'Java Programming',
    issuer: 'Pirple.com',
    date: 'August 2022',
    pdfUrl: '/assets/Mthobisi%20Snalo%20Cele%20-%202022-08-17.pdf',
    previewImage: javaIMG
  },
  {
    id: 2,
    title: 'Professional Foundations',
    issuer: 'African Leadership Experience',
    date: 'August 2024',
    pdfUrl: '/assets/professional%20foundations.pdf',
    previewImage: alxIMG
  },
  {
    id: 3,
    title: 'Front-End Development',
    issuer: 'African Leadership Experience',
    date: 'October 2024',
    pdfUrl: '/assets/69-front-end-web-development-certificate-mthobisi-snalo-cele.pdf',
    previewImage: frontendIMG
  },
  {
    id: 4,
    title: 'UKZN Tech Society Membership',
    issuer: 'UKZN Tech Society',
    date: 'November 2023',
    pdfUrl: '/assets/Mthobisi%20SnaloCele.pdf',
    previewImage: ukznIMG
  },
  {
    id: 4,
    title: 'Foundational C# with Microsoft',
    issuer: 'freeCodeCamp',
    date: 'June 2025',
    pdfUrl: '/assets/freecodecamp.pdf',
    previewImage: csharpcert
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

import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PDFModal = ({ pdfUrl, onClose }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

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
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer
            fileUrl={pdfUrl}
            plugins={[defaultLayoutPluginInstance]}
          />
        </Worker>
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