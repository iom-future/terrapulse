import { useState } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Shield,
  Building2,
  MapPin,
  Sparkles,
  RotateCcw,
} from 'lucide-react';

const initialFormState = {
  fullName: '',
  workEmail: '',
  organization: '',
  organizationType: '',
  rolePosition: '',
  countryRegion: '',
  challenges: '',
};

const organizationTypes = [
  'State or Local Government Authority',
  'Emergency Management Agency',
  'Humanitarian / Relief Organization',
  'Infrastructure or Utility Operator',
  'Insurance & Risk Assessment Team',
  'Environmental / Climate Research Institution',
  'Urban Planning & Development Body',
  'Other Institutional Partner',
];

export default function PilotForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRecord, setSubmittedRecord] = useState(null);

  const validate = (values) => {
    const newErrors = {};

    if (!values.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (values.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
    }

    if (!values.workEmail.trim()) {
      newErrors.workEmail = 'Please provide your work or institutional email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.workEmail.trim())) {
      newErrors.workEmail = 'Please enter a valid email address (e.g., name@organization.org).';
    }

    if (!values.organization.trim()) {
      newErrors.organization = 'Please enter your organization or agency name.';
    }

    if (!values.organizationType) {
      newErrors.organizationType = 'Please select your organization type.';
    }

    if (!values.rolePosition.trim()) {
      newErrors.rolePosition = 'Please enter your role or position.';
    }

    if (!values.countryRegion.trim()) {
      newErrors.countryRegion = 'Please specify your country or geographic region of interest.';
    }

    if (!values.challenges.trim()) {
      newErrors.challenges =
        'Please briefly describe the environmental or flood-risk challenges you are addressing.';
    } else if (values.challenges.trim().length < 15) {
      newErrors.challenges =
        'Please provide a bit more detail (at least 15 characters) to help our team review your request.';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);

    if (touched[name]) {
      const validationErrors = validate(updated);
      setErrors((prev) => ({ ...prev, [name]: validationErrors[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const validationErrors = validate(formData);
    setErrors((prev) => ({ ...prev, [name]: validationErrors[name] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allTouched = Object.keys(initialFormState).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {}
    );
    setTouched(allTouched);

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const record = {
        ...formData,
        submittedAt: new Date().toISOString(),
        referenceId: `TP-PILOT-${Math.floor(100000 + Math.random() * 900000)}`,
      };

      try {
        const existing = JSON.parse(
          localStorage.getItem('terrapulse_pilot_submissions') || '[]'
        );
        localStorage.setItem(
          'terrapulse_pilot_submissions',
          JSON.stringify([record, ...existing])
        );
      } catch {
        // Ignore storage errors in restricted environments
      }

      setIsSubmitting(false);
      setSubmittedRecord(record);
    }, 450);
  };

  const handleReset = () => {
    setFormData(initialFormState);
    setErrors({});
    setTouched({});
    setSubmittedRecord(null);
  };

  return (
    <section
      id="pilot"
      className="relative py-24 lg:py-32 bg-[#101C2C] text-[#F4F7FA] border-b border-white/10 overflow-hidden"
      aria-labelledby="pilot-heading"
    >
      <div className="absolute inset-0 bg-geo-grid opacity-45 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Pilot Programme Context & Value Proposition */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1D3557]/80 border border-[#55D3BD]/30 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#55D3BD]" />
              <span className="font-mono text-xs font-semibold tracking-[0.14em] text-[#55D3BD] uppercase">
                BUILDING CLIMATE RESILIENCE TOGETHER
              </span>
            </div>

            <h2
              id="pilot-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#F4F7FA] leading-[1.15] mb-5"
            >
              Let&apos;s Make Environmental Risk Easier to Understand.
            </h2>

            <p className="text-base sm:text-lg text-[#F4F7FA]/85 leading-relaxed mb-4">
              TerraPulse is seeking partnerships with organizations interested in exploring climate intelligence, flood-risk monitoring and environmental preparedness.
            </p>

            <p className="text-base text-[#F4F7FA]/75 leading-relaxed mb-8">
              Join the early access programme and help shape a platform designed around real-world environmental challenges.
            </p>

            {/* Pilot Collaboration Highlights */}
            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-xl bg-[#1D3557]/40 border border-white/10 flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#55D3BD] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-heading font-bold text-sm text-[#F4F7FA] mb-1">
                    Defined Geographic Pilot Scope
                  </h3>
                  <p className="text-xs text-[#F4F7FA]/75 leading-relaxed">
                    Initial pilots focus on flood-risk monitoring and preparedness across priority river basins, coastal zones and local government areas in Nigeria.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#1D3557]/40 border border-white/10 flex items-start gap-3.5">
                <Building2 className="w-5 h-5 text-[#3978E8] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-heading font-bold text-sm text-[#F4F7FA] mb-1">
                    Co-Designed With Operational Teams
                  </h3>
                  <p className="text-xs text-[#F4F7FA]/75 leading-relaxed">
                    Work alongside our team to evaluate geographic coverage, data reliability and how environmental intelligence supports preparedness workflows.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Privacy Assurance Box */}
            <div className="p-4 rounded-xl bg-[#0a121e] border border-white/10 flex items-start gap-3 text-xs text-[#7B8794]">
              <Shield className="w-4 h-4 text-[#55D3BD] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="text-[#F4F7FA]">Responsible Data Notice:</strong> Please do not include classified or sensitive operational security coordinates in this initial inquiry form.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Early Access Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0a121e] border border-white/15 p-6 sm:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.55)]">
              {submittedRecord ? (
                /* Confirmation State */
                <div className="py-8 text-left" role="status" aria-live="polite">
                  <div className="w-14 h-14 rounded-2xl bg-[#55D3BD]/15 border border-[#55D3BD]/40 flex items-center justify-center text-[#55D3BD] mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <span className="font-mono text-xs uppercase tracking-wider text-[#55D3BD] block mb-2">
                    SUBMISSION CONFIRMED • REF #{submittedRecord.referenceId}
                  </span>

                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F4F7FA] mb-4">
                    Early Access Application Received
                  </h3>

                  <p className="text-base sm:text-lg text-[#F4F7FA]/90 leading-relaxed p-5 rounded-xl bg-[#1D3557]/40 border border-[#55D3BD]/30 mb-6">
                    Thank you for your interest in TerraPulse. Your submission has been received. We&apos;ll be in touch to explore how we can work together.
                  </p>

                  <div className="rounded-xl bg-[#101C2C] border border-white/10 p-4 mb-6 font-mono text-xs space-y-1.5 text-[#7B8794]">
                    <div>
                      Applicant: <span className="text-[#F4F7FA]">{submittedRecord.fullName}</span> ({submittedRecord.rolePosition})
                    </div>
                    <div>
                      Organization:{' '}
                      <span className="text-[#F4F7FA]">
                        {submittedRecord.organization} — {submittedRecord.organizationType}
                      </span>
                    </div>
                    <div>
                      Region of Interest:{' '}
                      <span className="text-[#55D3BD]">{submittedRecord.countryRegion}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1D3557] hover:bg-[#3978E8] text-xs font-semibold text-[#F4F7FA] transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Submit Another Organization Inquiry</span>
                  </button>
                </div>
              ) : (
                /* Form State */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-white/10 pb-4 mb-2 flex items-center justify-between">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-[#F4F7FA]">
                        Pilot Programme &amp; Early Access Request
                      </h3>
                      <p className="text-xs text-[#7B8794] mt-0.5">
                        All fields marked with <span className="text-[#55D3BD]">*</span> are required.
                      </p>
                    </div>
                    <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#101C2C] border border-white/10 text-[#55D3BD]">
                      2026 PILOT COHORT
                    </span>
                  </div>

                  {/* Row 1: Full Name & Work Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#F4F7FA]/90 mb-2"
                      >
                        Full name <span className="text-[#55D3BD]">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        value={formData.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="e.g., Dr. Amina Bello"
                        aria-invalid={Boolean(errors.fullName)}
                        aria-describedby={errors.fullName ? 'error-fullName' : undefined}
                        className={`w-full px-4 py-3 rounded-lg bg-[#101C2C] border text-sm text-[#F4F7FA] placeholder-[#7B8794]/60 focus:outline-none transition-colors ${
                          errors.fullName
                            ? 'border-rose-400 focus:border-rose-400'
                            : 'border-white/15 focus:border-[#55D3BD]'
                        }`}
                      />
                      {errors.fullName && (
                        <p
                          id="error-fullName"
                          className="mt-1.5 text-xs text-rose-400 flex items-center gap-1"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="workEmail"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#F4F7FA]/90 mb-2"
                      >
                        Work email <span className="text-[#55D3BD]">*</span>
                      </label>
                      <input
                        id="workEmail"
                        name="workEmail"
                        type="email"
                        autoComplete="email"
                        value={formData.workEmail}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="e.g., a.bello@agency.gov.ng"
                        aria-invalid={Boolean(errors.workEmail)}
                        aria-describedby={errors.workEmail ? 'error-workEmail' : undefined}
                        className={`w-full px-4 py-3 rounded-lg bg-[#101C2C] border text-sm text-[#F4F7FA] placeholder-[#7B8794]/60 focus:outline-none transition-colors ${
                          errors.workEmail
                            ? 'border-rose-400 focus:border-rose-400'
                            : 'border-white/15 focus:border-[#55D3BD]'
                        }`}
                      />
                      {errors.workEmail && (
                        <p
                          id="error-workEmail"
                          className="mt-1.5 text-xs text-rose-400 flex items-center gap-1"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.workEmail}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Organization & Organization Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="organization"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#F4F7FA]/90 mb-2"
                      >
                        Organization <span className="text-[#55D3BD]">*</span>
                      </label>
                      <input
                        id="organization"
                        name="organization"
                        type="text"
                        autoComplete="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Organization or agency name"
                        aria-invalid={Boolean(errors.organization)}
                        aria-describedby={errors.organization ? 'error-organization' : undefined}
                        className={`w-full px-4 py-3 rounded-lg bg-[#101C2C] border text-sm text-[#F4F7FA] placeholder-[#7B8794]/60 focus:outline-none transition-colors ${
                          errors.organization
                            ? 'border-rose-400 focus:border-rose-400'
                            : 'border-white/15 focus:border-[#55D3BD]'
                        }`}
                      />
                      {errors.organization && (
                        <p
                          id="error-organization"
                          className="mt-1.5 text-xs text-rose-400 flex items-center gap-1"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.organization}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="organizationType"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#F4F7FA]/90 mb-2"
                      >
                        Organization type <span className="text-[#55D3BD]">*</span>
                      </label>
                      <select
                        id="organizationType"
                        name="organizationType"
                        value={formData.organizationType}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={Boolean(errors.organizationType)}
                        aria-describedby={
                          errors.organizationType ? 'error-organizationType' : undefined
                        }
                        className={`w-full px-4 py-3 rounded-lg bg-[#101C2C] border text-sm text-[#F4F7FA] focus:outline-none transition-colors ${
                          errors.organizationType
                            ? 'border-rose-400 focus:border-rose-400'
                            : 'border-white/15 focus:border-[#55D3BD]'
                        }`}
                      >
                        <option value="" className="text-[#7B8794]">
                          Select organization type...
                        </option>
                        {organizationTypes.map((type) => (
                          <option key={type} value={type} className="bg-[#101C2C] text-[#F4F7FA]">
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.organizationType && (
                        <p
                          id="error-organizationType"
                          className="mt-1.5 text-xs text-rose-400 flex items-center gap-1"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.organizationType}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Role / Position & Country or Region of Interest */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="rolePosition"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#F4F7FA]/90 mb-2"
                      >
                        Role / Position <span className="text-[#55D3BD]">*</span>
                      </label>
                      <input
                        id="rolePosition"
                        name="rolePosition"
                        type="text"
                        autoComplete="organization-title"
                        value={formData.rolePosition}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="e.g., Director of Flood Preparedness / GIS Lead"
                        aria-invalid={Boolean(errors.rolePosition)}
                        aria-describedby={errors.rolePosition ? 'error-rolePosition' : undefined}
                        className={`w-full px-4 py-3 rounded-lg bg-[#101C2C] border text-sm text-[#F4F7FA] placeholder-[#7B8794]/60 focus:outline-none transition-colors ${
                          errors.rolePosition
                            ? 'border-rose-400 focus:border-rose-400'
                            : 'border-white/15 focus:border-[#55D3BD]'
                        }`}
                      />
                      {errors.rolePosition && (
                        <p
                          id="error-rolePosition"
                          className="mt-1.5 text-xs text-rose-400 flex items-center gap-1"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.rolePosition}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="countryRegion"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#F4F7FA]/90 mb-2"
                      >
                        Country or region of interest <span className="text-[#55D3BD]">*</span>
                      </label>
                      <input
                        id="countryRegion"
                        name="countryRegion"
                        type="text"
                        value={formData.countryRegion}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="e.g., Nigeria — Lower Niger Basin / Lagos / Rivers"
                        aria-invalid={Boolean(errors.countryRegion)}
                        aria-describedby={errors.countryRegion ? 'error-countryRegion' : undefined}
                        className={`w-full px-4 py-3 rounded-lg bg-[#101C2C] border text-sm text-[#F4F7FA] placeholder-[#7B8794]/60 focus:outline-none transition-colors ${
                          errors.countryRegion
                            ? 'border-rose-400 focus:border-rose-400'
                            : 'border-white/15 focus:border-[#55D3BD]'
                        }`}
                      />
                      {errors.countryRegion && (
                        <p
                          id="error-countryRegion"
                          className="mt-1.5 text-xs text-rose-400 flex items-center gap-1"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.countryRegion}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 4: What environmental challenges are you trying to address? */}
                  <div>
                    <label
                      htmlFor="challenges"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#F4F7FA]/90 mb-2"
                    >
                      What environmental challenges are you trying to address?{' '}
                      <span className="text-[#55D3BD]">*</span>
                    </label>
                    <textarea
                      id="challenges"
                      name="challenges"
                      rows={4}
                      value={formData.challenges}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Describe the flood-risk monitoring, watershed exposure, infrastructure resilience or preparedness challenges your team is working to address..."
                      aria-invalid={Boolean(errors.challenges)}
                      aria-describedby={errors.challenges ? 'error-challenges' : undefined}
                      className={`w-full px-4 py-3 rounded-lg bg-[#101C2C] border text-sm text-[#F4F7FA] placeholder-[#7B8794]/60 focus:outline-none transition-colors ${
                        errors.challenges
                          ? 'border-rose-400 focus:border-rose-400'
                          : 'border-white/15 focus:border-[#55D3BD]'
                      }`}
                    />
                    {errors.challenges && (
                      <p
                        id="error-challenges"
                        className="mt-1.5 text-xs text-rose-400 flex items-center gap-1"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.challenges}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button & Supporting Text */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-lg bg-[#3978E8] hover:bg-[#2d66cc] disabled:opacity-60 text-white font-semibold text-sm sm:text-base shadow-[0_8px_25px_rgba(57,120,232,0.35)] transition-all duration-200 cursor-pointer"
                    >
                      <span>
                        {isSubmitting ? 'Submitting Application...' : 'Apply for the Pilot Programme'}
                      </span>
                      <Send className="w-4 h-4" />
                    </button>

                    <p className="mt-3 text-xs text-[#7B8794]">
                      Our team will review your submission and contact you about potential collaboration opportunities.
                    </p>
                  </div>

                  {/* Privacy Notice */}
                  <div className="pt-4 border-t border-white/10 text-[11px] text-[#7B8794] leading-relaxed">
                    <strong className="text-[#F4F7FA]/85">Privacy Notice:</strong> Information submitted through this form is used solely to evaluate pilot programme alignment and communicate with your organization regarding TerraPulse. We do not sell or share institutional contact details with third-party marketers.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

