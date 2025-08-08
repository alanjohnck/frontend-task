import React, { useState } from 'react';
import styles from './PopUp.module.css';

function PopUp({ onClose }) {
  const [activeTab, setActiveTab] = useState('html');

  const isHTMLTab = activeTab === 'html';
  const isNextJSTab = activeTab === 'next';

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h2>Code Export</h2>
            <p className={styles.subtext}>
              Manage how you download your website’s code.
            </p>
          </div>
          <span onClick={onClose} className={styles.close}>
          </span>
        </div>

        {/* Tabs */}
        <div className={styles.tabContainer}>
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${isHTMLTab ? styles.active : ''}`}
              onClick={() => setActiveTab('html')}
            >
              HTML & CSS
            </button>
            <button
              className={`${styles.tab} ${isNextJSTab ? styles.active : ''}`}
              onClick={() => setActiveTab('next')}
            >
              Next JS
            </button>
          </div>

          {/* Options */}
          <div className={styles.options}>
            {isHTMLTab && (
              <div className={styles.projectLabelContainer}>
                <div className={styles.projectLabel}>
                  <div className={styles.projectLogoLabel}>
                    <img src="./HTML.png" />
                    <label>Export as HTML and CSS</label>
                  </div>
                  <div className={styles.zipped}>zipped</div>
                </div>
               <div className={styles.checkboxContainer}>
                <label className={styles.customCheckbox}>
                  <input type="checkbox" defaultChecked />
                  <span className={styles.checkmark}></span>
                  Include assets (images, styles, fonts, etc.)
                </label>

                <label className={styles.customCheckbox}>
                  <input type="checkbox" defaultChecked />
                  <span className={styles.checkmark}></span>
                  Include custom code
                </label>
                </div>
              </div>
            )}

            {isNextJSTab && (
              <div className={styles.projectLabelContainer}>
                <div className={styles.projectLabel}>
                  <div className={styles.projectLogoLabel}>
                    <img src="./BRAND.png" />
                    <label>Export as Next JS Project</label>
                  </div>
                  <div className={styles.zipped}>zipped</div>
                </div>

               <div className={styles.checkboxContainer}>
                <label className={styles.customCheckbox}>
                  <input type="checkbox" defaultChecked />
                  <span className={styles.checkmark}></span>
                  Use `app` directory (NextJS v13+)
                </label>

                <label className={styles.customCheckbox}>
                  <input type="checkbox" defaultChecked />
                  <span className={styles.checkmark}></span>
                  Include assets locally (images, styles, fonts, etc.)
                </label>

                <label className={styles.customCheckbox}>
                  <input type="checkbox" defaultChecked />
                  <span className={styles.checkmark}></span>
                  Include custom code
                </label>
               </div>
             </div>
            )}
          </div>
        </div>

        {/* Download Button */}
        <button type='submit' className={styles.downloadButton}  >
          {isHTMLTab
            ? 'Download HTML CSS Project'
            : 'Download Next JS Project'}
        </button>
      </div>
    </div>
  );
}

export default PopUp;
