// Additive interactions only. Keep your original script.js unchanged.
document.addEventListener('DOMContentLoaded', () => {
  // Apply the public email configured in config.js to the home contact link.
  const configuredEmail = window.PORTFOLIO_CONFIG?.email || '';
  document.querySelectorAll('a[href="mailto:YOUR_EMAIL@example.com"]').forEach(a => { if (configuredEmail && !configuredEmail.includes('YOUR_')) a.href = `mailto:${configuredEmail}`; });
  // Booking chat form -> WhatsApp or email. Update destinations in config.js.
  const form=document.querySelector('#bookingForm');
  const buildMessage=()=>{const data=new FormData(form);return `Hello Deepika! I would like to discuss a project.\n\nName: ${data.get('clientName')}\nService: ${data.get('serviceType')}\nProject details: ${data.get('projectDetails')}\nExpected timeline: ${data.get('deadline')||'Not specified'}`;};
  if(form){form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const number=window.PORTFOLIO_CONFIG?.whatsappNumber||'';if(!number||number.includes('X')){alert('Please add your WhatsApp number in config.js first.');return;}window.open(`https://wa.me/${number}?text=${encodeURIComponent(buildMessage())}`,'_blank','noopener');});}
  const emailBtn=document.querySelector('#emailBooking');
  if(emailBtn)emailBtn.addEventListener('click',()=>{if(!form.reportValidity())return;const email=window.PORTFOLIO_CONFIG?.email||'';if(!email||email.includes('YOUR_')){alert('Please add your email in config.js first.');return;}location.href=`mailto:${email}?subject=${encodeURIComponent('Project Enquiry')}&body=${encodeURIComponent(buildMessage())}`;});

});
