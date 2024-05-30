import React, { useState } from 'react';
import './App.css';

const FaqSection = () => {
  const [currentTab, setCurrentTab] = useState('Tab 3');

  const renderTabContent = () => {
    switch (currentTab) {
      case 'Tab 3':
        return (
          <div className="question-answers-container">
            <div className="faq-qaa-main-conatainer">
              <div className="faq-q-icon-container track-button">
                <h4 className="faq-q-h">
                Why Eduzi Academy?
                  <p className="faq-ans-p" style={{ textAlign: 'justify' }}>
                  Eduzi Academy is one of the fastest growing up skilling
and job training Edtech platforms offering its flagship
course "Credit Analyst Program". The program
differentiates with others in the market with its holistic
and comprehensive nature of its program and by being
taught by highly successful real professionals from
leading banks, Fls, NBFCs and MNC's. Also, it is not
taught in a theoretical/ traditional manner but is well
known for its practical style which includes numerous
real-world cases. It provides an in-depth coverage and
a deep understanding of credit appraisal and analysis.
The program covers more than any other credit risk
program, giving you a Indian and global perspective on
credit risk management and preparing you to be a
highly successful credit analyst. Also, with the
placement assurance and large network of hiring
companies and consultants, we will leave no stone
unturned to get you placed within 3 months of
completion of online training.
                  </p>
                </h4>
                <div className="icon-14" />
              </div>
            </div>
            <div className="faq-qaa-main-conatainer">
              <div className="faq-q-icon-container track-button">
                <h4 className="faq-q-h">
                Where is Eduzi located?
                  <p className="faq-ans-p" style={{ textAlign: 'justify' }}>
                  The Eduzi head office is located in Hyderabad, India. All our programs are held live online in an interactive environment
                  </p>
                </h4>
                <div className="icon-14" />
              </div>
            </div>
            <div className="faq-qaa-main-conatainer">
              <div className="faq-q-icon-container track-button">
                <h4 className="faq-q-h">
                Will I get any certification?
                  <p className="faq-ans-p" style={{ textAlign: 'justify' }}>
                  Following the successful completion of the program, you will be awarded the "Credit Analyst Program" certification, branded by Eduzi Academy. This program is growing at a very fast pace and is recognizable across many reputed banks, financial institutions, rating agencies and MNCs.
                  </p>
                </h4>
                <div className="icon-14" />
              </div>
            </div>
          </div>
        );
      case 'Tab 2':
        return (
          <div className="question-answers-container">
            <div className="faq-qaa-main-conatainer">
              <div className="faq-q-icon-container track-button">
                <h4 className="faq-q-h">
                  What is the duration of the program?
                  <p className="faq-ans-p" style={{ textAlign: 'justify' }}>
                  The “Credit Analyst Program” is a 6-month program delivered virtually. 1-3 months –<br/>

Online Live Classes on Weekends.<br/>
Capstone Project.<br/>
Resume and LinkedIn profile enhancement.<br/>
Mock Interviews.<br/>
4-6 months –<br/>

Placements - Attending Interviews referred by Eduzi.<br/>
                  </p>
                </h4>
                <div className="icon-14" />
              </div>
            </div>
            <div className="faq-qaa-main-conatainer">
              <div className="faq-q-icon-container track-button">
                <h4 className="faq-q-h">
                What is the structure of the program?
                  <p className="faq-ans-p" style={{ textAlign: 'justify' }}>
                  • Interested candidate to contact Eduzi admissions office.<br/>
                  •Eduzi team would screen the candidate for fitment for the program via quick call.<br/>
• Candidates get enrolled to the program by paying the admission fees.<br/>
• Attend online Live Weekend (Saturday and Sunday) classes for 3 months.<br/>
• Complete regular assignments and Capstone project.<br/>
•Resume and LinkedIn profile enhancement and mock interview sessions.<br/>
• All the successful candidates commence placement services through Eduzi.<br/>
• Attend interviews referred by Eduzi placement team and get job offers.<br/>
                  </p>
                </h4>
                <div className="icon-14" />
              </div>
            </div>
            <div className="faq-qaa-main-conatainer">
              <div className="faq-q-icon-container track-button">
                <h4 className="faq-q-h">
                What should I do if I miss any Live classes?
                  <p className="faq-ans-p" style={{ textAlign: 'justify' }}>
                  Class recordings would be available with life time validity for reference and self-paced learning. However, attending Live classes is highly preferred and advised as most of the teaching is interactive and highly experiential.
                  </p>
                </h4>
                <div className="icon-14" />
              </div>
            </div>
            <div className="faq-qaa-main-conatainer">
              <div className="faq-q-icon-container track-button">
                <h4 className="faq-q-h">
                What is the medium of instruction?
                  <p className="faq-ans-p" style={{ textAlign: 'justify' }}>
                  The medium of instruction at Eduzi is English. All lectures are delivered in English. As part of the curriculum, we also help you develop your written and verbal communication skills that help you become more employable.
                  </p>
                </h4>
                <div className="icon-14" />
              </div>
            </div>
            
          </div>
        );
      case 'Tab 4':
        return (
          <div className="question-answers-container">
            <div className="faq-qaa-main-conatainer">
              <div className="faq-q-icon-container track-button">
                <h4 className="faq-q-h">
                What is "Placement Assistance" provided by Eduzi?
                  <p className="faq-ans-p" style={{ textAlign: 'justify' }}>
                  Upon successful completion of the three month online live training program, all the eligible candidates would be given placement support by Eduzi. We have a network of companies and consultants through which we identify hot jobs where active recruitments are happening and ensure that the successful candidates interview to such jobs. We handhold the candidate until he/she gets credit analyst role in a reputed domestic or international bank, NBFC, rating agency or a MNC within three months of the successful completion of the online classes. The eligibility criteria for placements assistance is -<br/>
• Overall grades in the program should be at least 60%.<br/>
• Pass the mock interviews and capstone project evaluation.<br/>
• Have a minimum attendance of 80% for the course.<br/>
                  </p>
                </h4>
                <div className="icon-14" />
              </div>
            </div>
            <div className="faq-qaa-main-conatainer">
              <div className="faq-q-icon-container track-button">
                <h4 className="faq-q-h">
                Do you Guarantee job placements?
                  <p className="faq-ans-p" style={{ textAlign: 'justify' }}>
                  No, we don't guarantee placements. But we will handhold the student until he/she gets credit analyst role in a reputed bank, NBFC or an MNC. Apart from rigorous training on credit analysis basics and advanced concepts, handholding also includes making the student job ready in a holistic way. We provide guidance right from preparation of Resume/LinkedIn profile, update the student with all the hot credit jobs in the current market, undertake mock interviews and mentor the students for a high interview success perspective.
                  </p>
                </h4>
                <div className="icon-14" />
              </div>
            </div>
            <div className="faq-qaa-main-conatainer">
              <div className="faq-q-icon-container track-button">
                <h4 className="faq-q-h">
                What If I Want To Get A Job Only In My Hometown?
                  <p className="faq-ans-p" style={{ textAlign: 'justify' }}>
                  Your job location is solely based on the opportunities available with our hiring partners. We do not commit anything with respect to a preferential job location.
                  </p>
                </h4>
                <div className="icon-14" />
              </div>
            </div>
            
          </div>
        );
      case 'Tab 7':
        return (
          <div className="question-answers-container">
            <div className="faq-qaa-main-conatainer">
              <div className="faq-q-icon-container track-button">
                <h4 className="faq-q-h">
               Who is a Credit Analyst?
                  <p className="faq-ans-p" style={{ textAlign: 'justify' }}>
                  The term credit analyst refers to a financial professional who assesses the creditworthiness of securities, individuals, or companies. Credit analysts determine the likelihood that a borrower can repay their financial obligations by reviewing their business, financial and management risk profiles and determining whether the state of the subject's financial health and the economic conditions are favorable to repayment.
Credit analysis is one of the most enriching career options for a professional wanting to pursue a career in finance. The job requires sharp analytical skills and a keen interest to analyse financials and operational information pertaining to a company. It provides you an opportunity to take part in discussions with the top management of the client and conduct independent research to make an overall assessment of the credit profile of the borrower.
A credit analyst analyses financial information from various sources (company balance sheets, news reports, etc.) and assesses the risk of issuing credit to the client. These professionals are mostly employed in corporate lending arms of banks, investment banks, credit rating agencies, financial institutions, mutual fund houses, and private equity firms.
                  </p>
                </h4>
                <div className="icon-14" />
              </div>
            </div>
            <div className="faq-qaa-main-conatainer">
              <div className="faq-q-icon-container track-button">
                <h4 className="faq-q-h">
                What expectations should I have for the Credit Analyst program?
                  <p className="faq-ans-p" style={{ textAlign: 'justify' }}>
                  The curriculum covers foundation to advanced topics. The program can be undertaken part time (you can continue as a working professional full-time) and requires a time commitment of about 8-10 hours a week, including lecture delivery hours, assignments and projects.
                  </p>
                </h4>
                <div className="icon-14" />
              </div>
            </div>
            <div className="faq-qaa-main-conatainer">
              <div className="faq-q-icon-container track-button">
                <h4 className="faq-q-h">
                What are the Career growth prospects as a Credit Analyst?
                  <p className="faq-ans-p" style={{ textAlign: 'justify' }}>
                  A typical credit analyst rises to the position of senior analyst wherein he/she spearheads the assignment. With more experience, the analyst moves up to the managerial level, handling teams of analysts and looking after certain industries/sectors. The right candidate can rise to top management level. If one has the right attitude, ambition and proven capability, they can reach a top management position, like CFO or CEO. As you go along, there are immense opportunities.
Credit analysts are widely sought after by banks, NBFC's. MNCs, financial institutions, investment banks, private equity houses, etc.
                  </p>
                </h4>
                <div className="icon-14" />
              </div>
            </div>
            <div className="faq-qaa-main-conatainer">
              <div className="faq-q-icon-container track-button">
                <h4 className="faq-q-h">
                How can I join Eduzi "Credit Analyst Program"? Is there any interview?
                  <p className="faq-ans-p" style={{ textAlign: 'justify' }}>
                  Eduzi admissions team will screen the candidates for fitment of their profile for the credit analyst profile via a quick call. Screening is done to ensure best results of our program.
Please call/WhatsApp on the below numbers our admissions team to get counselled- <br/>
• +91-79972-79973.<br/>
• +91-79972-79974.<br/>
                  </p>
                </h4>
                <div className="icon-14" />
              </div>
            </div>
            
          </div>
        );
      case 'Tab 6':
        return (
          <div className="question-answers-container">
            <div className="faq-qaa-main-conatainer">
              <div className="faq-q-icon-container track-button">
                <h4 className="faq-q-h">
                Fees
                  <p className="faq-ans-p" style={{ textAlign: 'justify' }}>
                  • Admission and Upskilling Fees of 40K (to be paid upfront).<br/>
• Placement Fees - 8% of one year CTC to be paid in 11 equal instalments (to be paid only after getting placed from our hiring partners with package of more than 6 LPA).<br/>
Detailed Elaboration<br/>
• Pay the admission fee of 40K (also available as easy EMIs starting INR 3250 per month) and start learning.<br/>
• Complete the 3 months of online classes, Capstone Project and assessments.<br/>
Join the Placements by signing the Income Share Agreement.<br/>
Get placed in top companies and Pay 8% of your annual CTC (to be paid in 11 monthly instalments), after you get a job above 6 LPA.<br/>
                  </p>
                </h4>
                <div className="icon-14" />
              </div>
            </div>
            <div className="faq-qaa-main-conatainer">
              <div className="faq-q-icon-container track-button">
                <h4 className="faq-q-h">
                What Will Happen If I Do Not Pay Any EMI?
                  <p className="faq-ans-p" style={{ textAlign: 'justify' }}>
                  At Eduzi, fee collection happens through a NBFC partner. In case of voluntary non-payments, the NBFC will initiate legal action to recover the pending payments. Also, this will negatively impact your credit score.
                  </p>
                </h4>
                <div className="icon-14" />
              </div>
            </div>
            <div className="faq-qaa-main-conatainer">
              <div className="faq-q-icon-container track-button">
                <h4 className="faq-q-h">
                What Is An Income Share Agreement?
                  <p className="faq-ans-p" style={{ textAlign: 'justify' }}>
                  Income Share Agreement or ISA is a legal agreement, which ensures that students share a pre-determined part of their income as tuition fee. For Eduzi the ISA amount is 8% of your annual CTC after your first salary. You will have to sign the ISA only if you opt for placement services from us.
                  </p>
                </h4>
                <div className="icon-14" />
              </div>
            </div>
            <div className="faq-qaa-main-conatainer">
              <div className="faq-q-icon-container track-button">
                <h4 className="faq-q-h">
                When Do I Have To Start Paying As per The ISA?
                  <p className="faq-ans-p" style={{ textAlign: 'justify' }}>
                  You will start paying from the time you get your first salary after joining a high-paying job. The threshold salary has been kept at 6 LPA for the Credit Analyst Program. You don't pay us anything until you get a job that pays above the minimum threshold salary.
                  </p>
                </h4>
                <div className="icon-14" />
              </div>
            </div>
            <div className="faq-qaa-main-conatainer">
              <div className="faq-q-icon-container track-button">
                <h4 className="faq-q-h">
                Can I See A Copy of The ISA?
                  <p className="faq-ans-p" style={{ textAlign: 'justify' }}>
                  Yes, of course. As you go through our ISA signing process, you will be counselled on various aspects of the ISA and a copy of the same will be made available to you.
                  </p>
                </h4>
                <div className="icon-14" />
              </div>
            </div>
            <div className="faq-qaa-main-conatainer">
              <div className="faq-q-icon-container track-button">
                <h4 className="faq-q-h">
                How Will Eduzi Verify My Income?
                  <p className="faq-ans-p" style={{ textAlign: 'justify' }}>
                  As per the ISA, you will be legally bound to furnish all the income relevant documents such as Offer Letter, Salary Slips, Income Tax Returns, Bank Statements, etc. to Eduzi after you receive job placement via Eduzi hiring partners.
                  </p>
                </h4>
                <div className="icon-14" />
              </div>
            </div>
            <div className="faq-qaa-main-conatainer">
              <div className="faq-q-icon-container track-button">
                <h4 className="faq-q-h">
                Will I Have To Pay If I Quit The Job Or Get Fired?
                  <p className="faq-ans-p" style={{ textAlign: 'justify' }}>
                  If you voluntarily quit your job, your payment will continue. However, in cases of forced termination, your payment will be paused and we will put our best efforts to get you another job as soon as possible. However, any such arrangement will involve a third party (a NBFC) and a non-payment window will be provided only after proper verification.
                  </p>
                </h4>
                <div className="icon-14" />
              </div>
            </div>
            
          </div>
        );
      default:
        return <div>Content not found</div>;
    }
  };

  return (
    <div id="faqs" data-sectionid="sections" className="faq-section">
      <div className="faq-main-container">
        <h2 className="faq-main-heading">Frequently Asked Questions</h2>
        <div className="faqs-all-tabs-main-container">
          <div
            data-duration-in={300}
            data-duration-out={100}
            data-current={currentTab}
            data-easing="ease"
            className="tabs-13 w-tabs"
          >
            <div className="faqs-all-tabs w-tab-menu">
              <a
                data-w-tab="Tab 3"
                id="training-details-tab-faqs"
                className={`faq-tab-link track-button w-inline-block w-tab-link ${currentTab === 'Tab 3' ? 'w--current' : ''}`}
                onClick={() => setCurrentTab('Tab 3')}
              >
                <div>General&nbsp;</div>
              </a>
              <a
                data-w-tab="Tab 2"
                id="eligibility-tab-faqs"
                className={`faq-tab-link track-button w-inline-block w-tab-link ${currentTab === 'Tab 2' ? 'w--current' : ''}`}
                onClick={() => setCurrentTab('Tab 2')}
              >
                <div>Training Program</div>
              </a>
              <a
                data-w-tab="Tab 4"
                id="placement-support-tab-faqs"
                className={`faq-tab-link track-button w-inline-block w-tab-link ${currentTab === 'Tab 4' ? 'w--current' : ''}`}
                onClick={() => setCurrentTab('Tab 4')}
              >
                <div>Placement Support</div>
              </a>
              <a
                data-w-tab="Tab 7"
                id="irc-tab-faqs"
                className={`faq-tab-link track-button w-inline-block w-tab-link ${currentTab === 'Tab 7' ? 'w--current' : ''}`}
                onClick={() => setCurrentTab('Tab 7')}
              >
                <div>Credit Analyst</div>
              </a>
              <a
                data-w-tab="Tab 6"
                id="fee-tab-faqs"
                className={`faq-tab-link track-button w-inline-block w-tab-link ${currentTab === 'Tab 6' ? 'w--current' : ''}`}
                onClick={() => setCurrentTab('Tab 6')}
              >
                <div>Fee</div>
              </a>
            </div>
            <div className="faqs-tab-content-2 w-tab-content">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
