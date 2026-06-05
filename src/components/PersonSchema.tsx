export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ganath Avinash G R",
    "url": "https://ganathavinash.site",
    "jobTitle": "Computer Science Undergraduate",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Amrita Vishwa Vidyapeetham"
    },
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Software Engineering",
      "Full Stack Development",
      "React",
      "Next.js",
      "Python",
      "Database Management Systems"
    ],
    "sameAs": [
      "https://github.com/Ganath-Avinash",
      "https://www.linkedin.com/in/ganath-avinash",
      "https://www.kaggle.com/ganathavinash"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
