import React, { useState, useEffect } from 'react';
import { Download, Award, Calendar } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext'; // Corrected path
import { useAuthStore } from '@/stores/authStore'; // Import useAuthStore
import jsPDF from 'jspdf';
import { supabase }srom '../lib/supabase';

interface CertificateTabProps {
  completedLessons: number;
  totalXP: number;
  onCertificateGenerate?: () => void;
}

export default function CertificateTab({
  completedLessons,
  totalXP,
  onCertificateGenerate
}: CertificateTabProps) {
  const { t } = useTranslation();
  const { user } = useAuthStore(); // Get user from store
  const isEligible = completedLessons === 18; // Assuming 18 lessons total for eligibility

  const [profileName, setProfileName] = useState<string>(() => {
    const metaFullName = [user?.user_metadata?.first_name, user?.user_metadata?.last_name]
      .filter(Boolean)
      .join(' ');
    return metaFullName || t('certificate.studentNamePlaceholder', { defaultValue: '[Student Name]' });
  });
  const [nameLoading, setNameLoading] = useState(true);

  useEffect(() => {
    const fetchUserName = async () => {
      if (!user?.id) {
        setProfileName(t('certificate.studentNamePlaceholder', { defaultValue: '[Student Name]' }));
        setNameLoading(false);
        return;
      }
      try {
        setNameLoading(true);
        const { data, error } = await supabase
          .from('users')
          .select('first_name, last_name')
          .eq('id', user.id)
          .single();

        if (error && error.code !== 'PGRST116') { // PGRST116: 0 rows, not an error for this case
          console.error('Error fetching user name from users table:', error);
          throw error; // Let catch block handle it
        }

        if (data && (data.first_name || data.last_name)) {
          setProfileName(`${data.first_name || ''} ${data.last_name || ''}`.trim());
        } else {
          // Fallback to metadata name if profile is empty, then to placeholder
          const metaFullName = [user?.user_metadata?.first_name, user?.user_metadata?.last_name]
            .filter(Boolean)
            .join(' ');
          setProfileName(metaFullName || t('certificate.studentNamePlaceholder', { defaultValue: '[Student Name]' }));
        }
      } catch (fetchError) {
        console.error('Error fetching user name for certificate:', fetchError);
        // Use metadata or placeholder on error
        const metaFullName = [user?.user_metadata?.first_name, user?.user_metadata?.last_name]
            .filter(Boolean)
            .join(' ');
        setProfileName(metaFullName || t('certificate.studentNamePlaceholder', { defaultValue: '[Student Name]' }));
      } finally {
        setNameLoading(false);
      }
    };

    fetchUserName();
  }, [user, t]);

  const generatePDF = async () => {
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4'
    });

    // Certificate content
    pdf.setFillColor(248, 250, 252); // bg-gray-50 equivalent
    pdf.rect(0, 0, 297, 210, 'F'); // Full page background

    pdf.setDrawColor(59, 130, 246); // border-blue-600 equivalent
    pdf.setLineWidth(3);
    pdf.rect(10, 10, 277, 190); // Border

    pdf.setFontSize(32);
    pdf.setTextColor(30, 64, 175); // text-blue-900 equivalent
    pdf.text(t('certificate.certificateOf'), 148.5, 40, { align: 'center' });

    pdf.setFontSize(16);
    pdf.setTextColor(75, 85, 99); // text-gray-600 equivalent
    pdf.text(t('certificate.academyName'), 148.5, 55, { align: 'center' });

    pdf.setFontSize(18); // "This certifies that"
    pdf.setTextColor(17, 24, 39); // text-gray-900
    pdf.text(t('certificate.certifies'), 148.5, 80, { align: 'center' });


    pdf.setFontSize(28); // Student Name
    pdf.setTextColor(17, 24, 39); // text-gray-900
    pdf.text(nameLoading ? t('common.loading', {defaultValue: 'Loading...'}) : profileName, 148.5, 95, { align: 'center' });

    pdf.setFontSize(14);
    pdf.setTextColor(75, 85, 99); // text-gray-700 equivalent
    pdf.text(t('certificate.hasCompleted'), 148.5, 110, { align: 'center' }); // Adjusted y-pos

    pdf.setFontSize(16); // Course Name
    pdf.setTextColor(30, 58, 138); // text-blue-800 equivalent for course name
    pdf.text(t('certificate.courseName'), 148.5, 120, { align: 'center' }); // Adjusted y-pos

    pdf.setFontSize(12);
    pdf.setTextColor(55, 65, 81); // text-gray-600
    pdf.text(t('certificate.totalXP', { xp: totalXP }), 30, 150); // x-pos from left
    pdf.text(t('certificate.completionDate', {
      date: new Date().toLocaleDateString()
    }), 30, 160); // x-pos from left

    // Signature section (right aligned conceptually)
    pdf.setFontSize(14);
    pdf.setTextColor(147, 51, 234); // text-purple-700 equivalent for "Certified by"
    // Aligning "Certified by SrCode" and "Senior AI Mentor" text to be above a potential signature line
    // For text alignment, x is the center of the text if align: 'center'
    const signatureX = 230; // Center point for signature text
    pdf.text(t('certificate.certifiedBy'), signatureX, 150, { align: 'center' });
    // pdf.line(signatureX - 40, 155, signatureX + 40, 155); // Example signature line
    pdf.setFontSize(12);
    pdf.setTextColor(75, 85, 99); // text-gray-500 for role
    pdf.text(t('certificate.seniorMentor'), signatureX, 160, { align: 'center' });


    pdf.save('VibeCodingAcademy-Certificate.pdf');

    if (onCertificateGenerate) {
      onCertificateGenerate();
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8">
        {/* This is the visual representation in the UI, not the PDF itself */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8 border-4 border-blue-200">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-blue-900 mb-2">
              {t('certificate.certificateOf')}
            </h1>
            <p className="text-lg text-gray-600 mb-6">{t('certificate.academyName')}</p>

            <div className="w-24 h-24 bg-yellow-400 rounded-full mx-auto flex items-center justify-center mb-4">
              <Award className="h-12 w-12 text-white" />
            </div>

            <p className="text-xl text-gray-700 mb-2">{t('certificate.certifies')}</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {nameLoading ? t('common.loading', {defaultValue: 'Loading...'}) : profileName}
            </h2>
            <p className="text-lg text-gray-700">
              {t('certificate.hasCompleted')}<br />
              <span className="font-semibold text-blue-800">{t('certificate.courseName')}</span>
            </p>

            <div className="flex justify-between items-center text-sm text-gray-600 border-t pt-4 mt-6">
              <div>
                <div className="flex items-center mb-1">
                  <Award className="h-4 w-4 mr-2 text-yellow-500" /> {/* Icon color to match preview */}
                  {t('certificate.totalXP', { xp: totalXP })}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-blue-500" /> {/* Icon color to match preview */}
                  {t('certificate.completionDate', {
                    date: new Date().toLocaleDateString()
                  })}
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-purple-700">{t('certificate.certifiedBy')}</p>
                <p className="text-gray-500">{t('certificate.seniorMentor')}</p>
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
                {t('certificate.congratulations')}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('certificate.earned')}
              </p>
              <button
                onClick={generatePDF}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 inline-flex items-center text-lg font-semibold transition-colors"
              >
                <Download className="h-6 w-6 mr-2" />
                {t('certificate.download')}
              </button>
            </>
          ) : (
            <>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {t('certificate.keepLearning')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('certificate.progress')}
              </p>

              <div className="max-w-md mx-auto">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  {/* Using dashboard.stats.progress for "Progress" and dashboard.stats.completedLessons for "completed lessons" */}
                  <span>{t('dashboard.stats.progress')}</span>
                  <span>{completedLessons}/18 {t('dashboard.stats.completedLessons').toLowerCase()}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-blue-600 h-4 rounded-full transition-all duration-500"
                    style={{ width: `${(completedLessons / 18) * 100}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  {t('certificate.remaining', { count: 18 - completedLessons })}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
