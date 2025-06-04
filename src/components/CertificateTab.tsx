import React from 'react';
import { Download, Award, Calendar } from 'lucide-react';
import jsPDF from 'jspdf';
// Note: html2canvas might be needed if rendering complex React components to PDF
// import html2canvas from 'html2canvas';

export default function CertificateTab({ completedLessons, totalXP }) {
  const isEligible = completedLessons === 18;

  // A simplified student name; in a real app, this would come from user data
  const studentName = "Valued Student";

  const generatePDF = async () => {
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4'
    });

    // Certificate content
    // Background Color
    pdf.setFillColor(248, 250, 252); // Light gray similar to bg-gray-50
    pdf.rect(0, 0, 297, 210, 'F');

    // Border
    pdf.setDrawColor(59, 130, 246); // Blue-600
    pdf.setLineWidth(3);
    pdf.rect(10, 10, 277, 190); // Outer border

    // Title
    pdf.setFontSize(32);
    pdf.setTextColor(30, 64, 175); // Blue-900
    pdf.text('CERTIFICATE OF COMPLETION', 148.5, 40, { align: 'center' });

    // Sub-title
    pdf.setFontSize(16);
    pdf.setTextColor(75, 85, 99); // Gray-500
    pdf.text('Vibe Coding Academy', 148.5, 55, { align: 'center' });

    // "This certifies that"
    pdf.setFontSize(18);
    pdf.setTextColor(17, 24, 39); // Gray-900
    pdf.text('This certifies that', 148.5, 80, { align: 'center' });

    // Student Name
    pdf.setFontSize(28);
    pdf.setTextColor(17, 24, 39); // Gray-900
    pdf.text(studentName, 148.5, 95, { align: 'center' });

    // Course Completion Text
    pdf.setFontSize(14);
    pdf.setTextColor(75, 85, 99); // Gray-500
    pdf.text('has successfully completed all 18 lessons of the', 148.5, 110, { align: 'center' });
    pdf.setFontSize(16);
    pdf.setTextColor(30, 58, 138); // Blue-800 (for course name)
    pdf.text('bolt.new Mastery Course', 148.5, 120, { align: 'center' });

    // Details Section
    pdf.setFontSize(12);
    pdf.setTextColor(55, 65, 81); // Gray-600
    pdf.text(`Total XP Earned: ${totalXP}`, 30, 150);
    pdf.text(`Completion Date: ${new Date().toLocaleDateString()}`, 30, 160);

    // Signature Section
    pdf.setFontSize(14);
    pdf.setTextColor(147, 51, 234); // Purple-600
    pdf.text('Certified by SrCode', 230, 150, { align: 'center' });
    pdf.setLineWidth(0.5);
    pdf.line(190, 155, 270, 155); // Signature line
    pdf.setFontSize(12);
    pdf.setTextColor(75, 85, 99); // Gray-500
    pdf.text('Senior AI Mentor', 230, 165, { align: 'center' });

    // Optional: Add an Award Icon (using a simple shape or importing an image if possible)
    // pdf.setFillColor(251, 191, 36); // Yellow-400
    // pdf.circle(148.5, 68, 10, 'F'); // Example simple circle as placeholder

    pdf.save('VibeCodingAcademy-Certificate.pdf');
  };

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8 border-4 border-blue-200">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-blue-900 mb-2">
              CERTIFICATE OF COMPLETION
            </h1>
            <p className="text-lg text-gray-600 mb-6">Vibe Coding Academy</p>

            <div className="w-24 h-24 bg-yellow-400 rounded-full mx-auto flex items-center justify-center mb-4">
              <Award className="h-12 w-12 text-white" />
            </div>

            <p className="text-xl text-gray-700 mb-2">This certifies that</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{studentName}</h2>
            <p className="text-lg text-gray-700">
              has successfully completed all 18 lessons of the<br />
              <span className="font-semibold text-blue-800">bolt.new Mastery Course</span>
            </p>

            <div className="flex justify-between items-center text-sm text-gray-600 border-t pt-4 mt-6">
              <div>
                <div className="flex items-center mb-1">
                  <Award className="h-4 w-4 mr-2 text-yellow-500" />
                  Total XP: {totalXP}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                  {new Date().toLocaleDateString()}
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-purple-700">Certified by SrCode</p>
                <p className="text-gray-500">Senior AI Mentor</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="text-center">
          {isEligible ? (
            <>
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-2">
                Congratulations! 🎉
              </h3>
              <p className="text-gray-600 mb-6">
                You've completed all 18 lessons and earned your certificate!
              </p>
              <button
                onClick={generatePDF}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 inline-flex items-center text-lg font-semibold transition-colors"
              >
                <Download className="h-6 w-6 mr-2" />
                Download Certificate
              </button>
            </>
          ) : (
            <>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Keep Learning!</h3>
              <p className="text-gray-600 mb-4">Complete all 18 lessons to earn your certificate.</p>

              <div className="max-w-md mx-auto">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Progress</span>
                  <span>{completedLessons}/18 lessons</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-blue-600 h-4 rounded-full transition-all duration-500"
                    style={{ width: `${(completedLessons / 18) * 100}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  {18 - completedLessons} lessons remaining
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
