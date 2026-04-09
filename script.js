// Social Sharing Configuration
const workshopUrl = window.location.href;
const workshopTitle = "Join the DIS 2026 Workshop: Embodied Vulnerability in Design Research";

function shareOnTwitter() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(workshopTitle)}&url=${encodeURIComponent(workshopUrl)}`;
    window.open(twitterUrl, '_blank');
}

function shareOnLinkedIn() {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(workshopUrl)}`;
    window.open(linkedinUrl, '_blank');
}