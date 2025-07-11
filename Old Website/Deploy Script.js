<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lux Search® | Curated Career Opportunities</title>
  <style>
    :root {
      --primary: #5551ff;
      --background: #f8fafc;
      --card: #ffffff;
      --card-hover: rgba(232, 232, 255, 0.4);
      --text: #1c1c1c;
      --text-secondary: #64748b;
      --border: #e2e8f0;
      --shadow: rgba(0, 0, 0, 0.03);
      --gradient-start: #5551ff;
      --gradient-end: #9089fc;
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    }
    
    body {
      background-color: var(--background);
      color: var(--text);
      line-height: 1.5;
      overflow-x: hidden;
      min-height: 100vh;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }
    
    header {
      padding: 24px 0;
      position: relative;
      z-index: 10;
    }
    
    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .logo {
      font-size: 24px;
      font-weight: 700;
      background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    nav ul {
      display: flex;
      list-style: none;
      gap: 32px;
    }
    
    nav a {
      text-decoration: none;
      color: var(--text);
      font-weight: 500;
      transition: color 0.2s;
    }
    
    nav a:hover {
      color: var(--primary);
    }
    
    .hero {
      padding: 80px 0 120px;
      position: relative;
      overflow: hidden;
    }
    
    .hero-bg {
      position: absolute;
      top: -300px;
      right: -300px;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      background: linear-gradient(135deg, rgba(85, 81, 255, 0.07) 0%, rgba(144, 137, 252, 0.07) 100%);
      z-index: -1;
    }
    
    .hero-bg-2 {
      position: absolute;
      bottom: -300px;
      left: -300px;
      width: 600px;
      height: 600px;
      border-radius: 50%;
      background: linear-gradient(135deg, rgba(85, 81, 255, 0.05) 0%, rgba(144, 137, 252, 0.05) 100%);
      z-index: -1;
    }
    
    h1 {
      font-size: 52px;
      font-weight: 700;
      margin-bottom: 20px;
      line-height: 1.2;
      max-width: 700px;
    }
    
    .accent {
      background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .subtitle {
      font-size: 20px;
      color: var(--text-secondary);
      max-width: 600px;
      margin-bottom: 40px;
    }
    
    .jobs-section {
      padding: 0 0 100px;
      position: relative;
    }
    
    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 40px;
    }
    
    .section-title {
      font-size: 32px;
      font-weight: 700;
    }
    
    .jobs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 24px;
    }
    
    .job-card {
      position: relative;
      background-color: var(--card);
      border-radius: 24px;
      padding: 30px;
      box-shadow: 0 4px 20px var(--shadow);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      overflow: hidden;
      cursor: pointer;
      border: 1px solid var(--border);
      height: 180px;
    }
    
    .job-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 30px rgba(85, 81, 255, 0.1);
      background-color: var(--card-hover);
      border-color: rgba(85, 81, 255, 0.2);
    }
    
    .job-card.expanded {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 90%;
      max-width: 700px;
      height: auto;
      max-height: 80vh;
      overflow-y: auto;
      z-index: 1000;
      cursor: default;
      box-shadow: 0 24px 60px rgba(0, 0, 0, 0.15);
    }
    
    .job-card.expanded .job-full-content {
      max-height: 1000px;
      opacity: 1;
    }
    
    .job-card::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 6px;
      height: 100%;
      background: linear-gradient(to bottom, var(--gradient-start), var(--gradient-end));
      border-radius: 3px 0 0 3px;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .job-card:hover::before {
      opacity: 1;
    }
    
    .job-card.expanded::before {
      opacity: 1;
    }
    
    .job-header {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 24px;
    }
    
    .company-icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(45deg, var(--gradient-start), var(--gradient-end));
      opacity: 0.8;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 20px;
    }
    
    .job-info {
      flex: 1;
    }
    
    .job-title {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 4px;
      transition: color 0.2s;
    }
    
    .job-card:hover .job-title {
      color: var(--primary);
    }
    
    .company-name {
      color: var(--text-secondary);
      font-weight: 500;
    }
    
    .job-details {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 24px;
    }
    
    .job-detail {
      font-size: 14px;
      color: var(--text-secondary);
      background-color: rgba(100, 116, 139, 0.08);
      padding: 6px 14px;
      border-radius: 100px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    
    .detail-icon {
      width: 14px;
      height: 14px;
      opacity: 0.7;
    }
    
    .job-full-content {
      max-height: 0;
      opacity: 0;
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      overflow: hidden;
    }
    
    .job-description {
      margin-bottom: 24px;
      color: var(--text-secondary);
    }
    
    .description-title {
      font-weight: 600;
      margin-bottom: 16px;
      color: var(--text);
    }
    
    .description-points {
      list-style: none;
      margin-bottom: 24px;
    }
    
    .description-points li {
      position: relative;
      padding-left: 24px;
      margin-bottom: 12px;
    }
    
    .description-points li::before {
      content: "";
      position: absolute;
      left: 0;
      top: 9px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
    }
    
    .apply-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .salary {
      font-weight: 600;
      color: var(--primary);
    }
    
    .apply-btn {
      background: transparent;
      color: var(--primary);
      border: 1px solid rgba(85, 81, 255, 0.3);
      border-radius: 14px;
      padding: 10px 20px;
      font-weight: 600;
      font-size: 15px;
      cursor: pointer;
      transition: all 0.2s;
    }
    
    .apply-btn:hover {
      background-color: var(--primary);
      color: white;
      border-color: var(--primary);
    }
    
    .apply-full {
      margin-top: 30px;
      width: 100%;
      background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
      color: white;
      border: none;
      border-radius: 14px;
      padding: 14px 28px;
      font-weight: 600;
      font-size: 16px;
      cursor: pointer;
      transition: all 0.2s;
    }
    
    .apply-full:hover {
      opacity: 0.9;
    }
    
    .close-btn {
      position: absolute;
      top: 20px;
      right: 20px;
      background: none;
      border: none;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      opacity: 0;
      transition: opacity 0.3s ease, background-color 0.2s;
    }
    
    .close-btn:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
    
    .job-card.expanded .close-btn {
      opacity: 1;
    }
    
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(3px);
      z-index: 999;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s;
    }
    
    .overlay.active {
      opacity: 1;
      visibility: visible;
    }
    
    .floating-shapes {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: -1;
      overflow: hidden;
    }
    
    .shape {
      position: absolute;
      background-color: rgba(85, 81, 255, 0.04);
      border-radius: 50%;
    }
    
    .shape-1 {
      width: 200px;
      height: 200px;
      top: 10%;
      right: 5%;
    }
    
    .shape-2 {
      width: 100px;
      height: 100px;
      bottom: 20%;
      left: 10%;
    }
    
    .shape-3 {
      width: 150px;
      height: 150px;
      bottom: 30%;
      right: 25%;
    }
    
    .cta {
      position: relative;
      margin: 0 auto;
      text-align: center;
      background: linear-gradient(135deg, rgba(85, 81, 255, 0.04) 0%, rgba(144, 137, 252, 0.04) 100%);
      border-radius: 30px;
      padding: 40px;
      max-width: 800px;
    }
    
    .cta-title {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 16px;
    }
    
    .cta-description {
      color: var(--text-secondary);
      max-width: 500px;
      margin: 0 auto 24px;
    }
    
    .cta-btn {
      background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
      color: white;
      border: none;
      border-radius: 16px;
      padding: 16px 32px;
      font-weight: 600;
      font-size: 16px;
      cursor: pointer;
      transition: opacity 0.2s;
    }
    
    .cta-btn:hover {
      opacity: 0.9;
    }
    
    /* Resume modal styles */
    .resume-modal {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: var(--card);
      padding: 30px;
      border-radius: 24px;
      box-shadow: 0 24px 60px rgba(0, 0, 0, 0.15);
      width: 90%;
      max-width: 500px;
      z-index: 1001;
      display: none;
    }
    
    .resume-modal.active {
      display: block;
    }
    
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    
    .modal-title {
      font-size: 24px;
      font-weight: 600;
    }
    
    .modal-close {
      background: none;
      border: none;
      cursor: pointer;
      padding: 5px;
    }
    
    .resume-form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    
    .form-label {
      font-weight: 500;
      color: var(--text);
    }
    
    .form-input {
      padding: 12px 16px;
      border-radius: 12px;
      border: 1px solid var(--border);
      font-size: 16px;
      transition: border-color 0.2s;
    }
    
    .form-input:focus {
      outline: none;
      border-color: var(--primary);
    }
    
    .file-input-container {
      position: relative;
      overflow: hidden;
      display: inline-block;
      width: 100%;
    }
    
    .file-input-label {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 30px;
      border: 2px dashed var(--border);
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.2s;
    }
    
    .file-input-label:hover {
      border-color: var(--primary);
      background-color: rgba(85, 81, 255, 0.03);
    }
    
    .file-input {
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
    
    .file-icon {
      margin-bottom: 12px;
      color: var(--primary);
    }
    
    .file-text {
      text-align: center;
      color: var(--text-secondary);
      margin-bottom: 8px;
    }
    
    .file-name {
      color: var(--primary);
      font-weight: 500;
      word-break: break-all;
      display: none;
    }
    
    .file-name.active {
      display: block;
    }
    
    .submit-btn {
      background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
      color: white;
      border: none;
      border-radius: 16px;
      padding: 16px 32px;
      font-weight: 600;
      font-size: 16px;
      cursor: pointer;
      transition: opacity 0.2s;
    }
    
    .submit-btn:hover {
      opacity: 0.9;
    }
    
    .success-message {
      display: none;
      text-align: center;
      padding: 20px;
    }
    
    .success-message.active {
      display: block;
    }
    
    .success-icon {
      color: #10b981;
      margin-bottom: 16px;
    }
    
    .error-message {
      color: #ef4444;
      font-size: 14px;
      display: none;
    }
    
    .error-message.active {
      display: block;
    }
    
    @media (max-width: 768px) {
      h1 {
        font-size: 36px;
      }
      
      .jobs-grid {
        grid-template-columns: 1fr;
      }
      
      nav {
        display: none;
      }
      
      .job-card {
        padding: 24px;
      }
    }
  </style>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.29.0/feather.min.js"></script>
</head>
<body>
  <div class="overlay"></div>
  
  <!-- Resume upload modal -->
  <div class="resume-modal" id="resumeModal">
    <div class="modal-header">
      <h3 class="modal-title">Submit Your Resume</h3>
      <button class="modal-close" id="modalClose">
        <i data-feather="x"></i>
      </button>
    </div>
    
    <div class="resume-form-container">
      <form class="resume-form" id="resumeForm" name="resume-submission" method="POST" enctype="multipart/form-data" data-netlify="true">
        <input type="hidden" name="form-name" value="resume-submission">
        
        <div class="form-group">
          <label for="name" class="form-label">Full Name</label>
          <input type="text" id="name" name="name" class="form-input" required>
        </div>
        
        <div class="form-group">
          <label for="email" class="form-label">Email Address</label>
          <input type="email" id="email" name="email" class="form-input" required>
        </div>
        
        <div class="form-group">
          <label for="phone" class="form-label">Phone Number</label>
          <input type="tel" id="phone" name="phone" class="form-input">
        </div>
        
        <div class="form-group">
          <label class="form-label">Resume</label>
          <div class="file-input-container">
            <label for="resume" class="file-input-label">
              <i data-feather="upload-cloud" class="file-icon" style="width: 40px; height: 40px;"></i>
              <p class="file-text">Drag and drop your resume here or click to browse</p>
              <p class="file-text">(PDF, DOCX, DOC, RTF)</p>
              <p class="file-name" id="fileName"></p>
            </label>
            <input type="file" id="resume" name="resume" class="file-input" accept=".pdf,.doc,.docx,.rtf" required>
          </div>
          <p class="error-message" id="fileError">Please upload a valid resume file (PDF, DOCX, DOC, RTF).</p>
        </div>
        
        <button type="submit" class="submit-btn">Submit Resume</button>
      </form>
      
      <div class="success-message" id="successMessage">
        <i data-feather="check-circle" class="success-icon" style="width: 50px; height: 50px;"></i>
        <h3>Thank you for your submission!</h3>
        <p>We've received your resume and will contact you when we have matching opportunities.</p>
      </div>
    </div>
  </div>

  <header>
    <div class="container header-content">
      <div class="logo">Lux Search®</div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="hero-bg"></div>
    <div class="hero-bg-2"></div>
    <div class="container">
      <h1>Find your <span class="accent">perfect career</span> opportunity</h1>
      <p class="subtitle">Discover hand-picked positions from industry-leading companies that match your skills and aspirations.</p>
    </div>
  </section>

  <section class="jobs-section">
    <div class="floating-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div>
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Current opportunities</h2>
      </div>
      
      <div class="jobs-grid">
        <div class="job-card">
          <button class="close-btn">
            <i data-feather="x"></i>
          </button>
          <div class="job-header">
            <div class="company-icon">D</div>
            <div class="job-info">
              <h3 class="job-title">Senior Product Designer</h3>
              <p class="company-name">Dribbble</p>
            </div>
          </div>
          <div class="job-details">
            <span class="job-detail">
              <i data-feather="clock" class="detail-icon"></i>
              Full-time
            </span>
            <span class="job-detail">
              <i data-feather="map-pin" class="detail-icon"></i>
              Remote
            </span>
            <span class="job-detail">
              <i data-feather="briefcase" class="detail-icon"></i>
              5+ years
            </span>
          </div>
          <div class="job-full-content">
            <div class="job-description">
              <h4 class="description-title">About this role</h4>
              <ul class="description-points">
                <li>Lead design projects from concept to completion</li>
                <li>Collaborate with cross-functional teams</li>
                <li>Create beautiful, intuitive interfaces</li>
              </ul>
              
              <h4 class="description-title">Qualifications</h4>
              <ul class="description-points">
                <li>5+ years of product design experience</li>
                <li>Strong portfolio of design work</li>
                <li>Experience with design systems</li>
              </ul>
            </div>
            <button class="apply-full">Apply for this position</button>
          </div>
          <div class="apply-container">
            <span class="salary">$120k-150k</span>
            <button class="apply-btn">Apply Now</button>
          </div>
        </div>
        
        <div class="job-card">
          <button class="close-btn">
            <i data-feather="x"></i>
          </button>
          <div class="job-header">
            <div class="company-icon">F</div>
            <div class="job-info">
              <h3 class="job-title">Frontend Developer</h3>
              <p class="company-name">Figma</p>
            </div>
          </div>
          <div class="job-details">
            <span class="job-detail">
              <i data-feather="clock" class="detail-icon"></i>
              Full-time
            </span>
            <span class="job-detail">
              <i data-feather="map-pin" class="detail-icon"></i>
              San Francisco
            </span>
            <span class="job-detail">
              <i data-feather="briefcase" class="detail-icon"></i>
              3+ years
            </span>
          </div>
          <div class="job-full-content">
            <div class="job-description">
              <h4 class="description-title">About this role</h4>
              <ul class="description-points">
                <li>Build high-quality web applications</li>
                <li>Optimize application performance</li>
                <li>Collaborate with designers and backend engineers</li>
              </ul>
              
              <h4 class="description-title">Qualifications</h4>
              <ul class="description-points">
                <li>3+ years of frontend development experience</li>
                <li>Expert knowledge of React and TypeScript</li>
                <li>Understanding of modern web standards</li>
              </ul>
            </div>
            <button class="apply-full">Apply for this position</button>
          </div>
          <div class="apply-container">
            <span class="salary">$100k-130k</span>
            <button class="apply-btn">Apply Now</button>
          </div>
        </div>
        
        <div class="job-card">
          <button class="close-btn">
            <i data-feather="x"></i>
          </button>
          <div class="job-header">
            <div class="company-icon">A</div>
            <div class="job-info">
              <h3 class="job-title">Marketing Manager</h3>
              <p class="company-name">Airbnb</p>
            </div>
          </div>
          <div class="job-details">
            <span class="job-detail">
              <i data-feather="clock" class="detail-icon"></i>
              Full-time
            </span>
            <span class="job-detail">
              <i data-feather="map-pin" class="detail-icon"></i>
              New York
            </span>
            <span class="job-detail">
              <i data-feather="briefcase" class="detail-icon"></i>
              4+ years
            </span>
          </div>
          <div class="job-full-content">
            <div class="job-description">
              <h4 class="description-title">About this role</h4>
              <ul class="description-points">
                <li>Develop and execute marketing strategies</li>
                <li>Manage digital marketing campaigns</li>
                <li>Analyze marketing metrics and ROI</li>
              </ul>
              
              <h4 class="description-title">Qualifications</h4>
              <ul class="description-points">
                <li>4+ years of marketing experience</li>
                <li>Experience with digital marketing channels</li>
                <li>Strong analytical and communication skills</li>
              </ul>
            </div>
            <button class="apply-full">Apply for this position</button>
          </div>
          <div class="apply-container">
            <span class="salary">$90k-115k</span>
            <button class="apply-btn">Apply Now</button>
          </div>
        </div>
        
        <div class="job-card">
          <button class="close-btn">
            <i data-feather="x"></i>
          </button>
          <div class="job-header">
            <div class="company-icon">S</div>
            <div class="job-info">
              <h3 class="job-title">Data Scientist</h3>
              <p class="company-name">Spotify</p>
            </div>
          </div>
          <div class="job-details">
            <span class="job-detail">
              <i data-feather="clock" class="detail-icon"></i>
              Full-time
            </span>
            <span class="job-detail">
              <i data-feather="map-pin" class="detail-icon"></i>
              Remote
            </span>
            <span class="job-detail">
              <i data-feather="briefcase" class="detail-icon"></i>
              2+ years
            </span>
          </div>
          <div class="job-full-content">
            <div class="job-description">
              <h4 class="description-title">About this role</h4>
              <ul class="description-points">
                <li>Build and implement ML models</li>
                <li>Analyze large data sets</li>
                <li>Work with engineering teams to implement solutions</li>
              </ul>
              
              <h4 class="description-title">Qualifications</h4>
              <ul class="description-points">
                <li>2+ years of data science experience</li>
                <li>Proficiency in Python and SQL</li>