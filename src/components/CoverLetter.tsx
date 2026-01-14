const CoverLetter = () => {
  const currentDate = new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="resume-container max-w-[850px] mx-auto bg-card p-8 md:p-12 shadow-sm print:break-before-page">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-resume-heading mb-1">
          Jay (Geoffrey) De Kleijn
        </h1>
        <p className="text-resume-body text-sm">
          mail@jaysphoto.me • +34 6 903 555 07 • Málaga, Spain
        </p>
        <p className="text-resume-body text-sm">
          linkedin.com/in/jaysphoto • github.com/jaysphoto
        </p>
      </header>

      {/* Date */}
      <p className="text-resume-body mb-6">{currentDate}</p>

      {/* Recipient */}
      <div className="mb-6 text-resume-body">
        <p className="font-semibold text-resume-heading">Hiring Manager</p>
        <p>[Company Name]</p>
        <p>[Company Address]</p>
        <p>[City, State ZIP]</p>
      </div>

      {/* Salutation */}
      <p className="text-resume-body mb-4">Dear Hiring Manager,</p>

      {/* Body */}
      <div className="space-y-4 text-resume-body leading-relaxed">
        <p>
          I am writing to express my strong interest in the Platform Engineer position at [Company Name]. 
          With over 8 years of experience designing and maintaining scalable cloud infrastructure, 
          I am excited about the opportunity to contribute to your engineering team and help drive 
          your platform initiatives forward.
        </p>

      </div>

      {/* Closing */}
      <div className="mt-8 text-resume-body">
        <p className="mb-6">Sincerely,</p>
        <p className="font-semibold text-resume-heading">Jay De Kleijn</p>
      </div>
    </div>
  );
};

export default CoverLetter;
