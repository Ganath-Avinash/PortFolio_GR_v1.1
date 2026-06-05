import React from 'react';
import Image from 'next/image';
import './ProfileCard.css';

interface ProfileCardProps {
  avatarUrl?: string;
  coloredAvatarUrl?: string;
  name?: string;
  title?: string;
  contactText?: string;
  onContactClick?: () => void;
  className?: string;
}

export default function ProfileCard({
  avatarUrl = '',
  coloredAvatarUrl,
  name = 'Sophie Bennett',
  title = 'Product Designer who focuses on simplicity & usability.',
  contactText = 'Follow +',
  onContactClick,
  className = ''
}: ProfileCardProps) {
  // Use coloredAvatarUrl if available, otherwise avatarUrl
  const imageToUse = coloredAvatarUrl || avatarUrl || '/profile.jpg';
  
  return (
    <div className={`new-profile-card ${className}`.trim()}>
      <div className="new-profile-card-image-container">
        <Image
          className="new-profile-card-image"
          src={imageToUse}
          alt={`${name} avatar`}
          width={400}
          height={400}
          priority
          onError={e => {
            const t = e.target as HTMLImageElement;
            t.style.display = 'none';
          }}
        />
      </div>
      
      <div className="new-profile-card-content">
        <div className="new-profile-card-header">
          <h2 className="new-profile-card-name">{name}</h2>
          <svg className="new-profile-card-verified" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.243 2.502c1.026-.803 2.488-.803 3.514 0l1.246.974c.484.378 1.096.55 1.706.478l1.554-.183c1.288-.152 2.418.736 2.569 2.018l.183 1.554c.071.61.243 1.222.621 1.706l.974 1.246c.803 1.026.803 2.488 0 3.514l-.974 1.246c-.378.484-.55 1.096-.478 1.706l.183 1.554c.152 1.288-.736 2.418-2.018 2.569l-1.554.183c-.61.071-1.222.243-1.706.621l-1.246.974c-1.026.803-2.488.803-3.514 0l-1.246-.974c-.484-.378-1.096-.55-1.706-.478l-1.554.183c-1.288.152-2.418-.736-2.569-2.018l-.183-1.554c-.071-.61-.243-1.222-.621-1.706l-.974-1.246c-.803-1.026-.803-2.488 0-3.514l.974-1.246c.378-.484.55-1.096.478-1.706l-.183-1.554c-.152-1.288.736-2.418 2.018-2.569l1.554-.183c.61-.071 1.222-.243 1.706-.621l1.246-.974z" fill="#1DA1F2"/>
            <path d="M10.5 15.5l-3-3 1.5-1.5 1.5 1.5 4.5-4.5 1.5 1.5-6 6z" fill="white"/>
          </svg>
        </div>
        
        <p className="new-profile-card-title">{title}</p>
        
        <div className="new-profile-card-footer">
          <div className="new-profile-card-stats">
            <div className="new-profile-card-stat">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span>1k+</span>
            </div>
            <div className="new-profile-card-stat">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span>60</span>
            </div>
          </div>
          
          <button 
            className="new-profile-card-btn"
            onClick={onContactClick}
            type="button"
          >
            {contactText}
          </button>
        </div>
      </div>
    </div>
  );
}
