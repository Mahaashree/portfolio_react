import React from "react";

function article_1() {
	return {
		date: "13 June 2025",
		title: "Building Browser-Based Face Liveness Detection",
		description:
			"Explore how face liveness detection can be implemented securely in the browser for real-time Aadhaar authentication and anti-spoofing.",
		keywords: [
			"face liveness detection",
			"browser-based security",
			"real-time face authentication",
			"Mahaashree",
			"AIML projects",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
					padding: 1rem;
				}

				.randImage {
					border-radius: 8px;
					margin-top: 1rem;
					box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
				}
			`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						Browser-based face liveness detection has great potential in secure
						digital identity systems. This article breaks down how to combine
						Mediapipe, blink detection, and TensorFlow.js to ensure that the face
						on camera is live—not a static photo or video.
					</div>
					<img
						src="https://picsum.photos/300/200"
						alt="face-auth-demo"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "10 June 2025",
		title: "Lessons From Building a Telemedicine App in College",
		description:
			"A quick dive into what I learned while designing a telemedicine app for college projects, from integrating video calls to handling real-time bookings.",
		keywords: [
			"telemedicine app",
			"FlutterFlow",
			"college project",
			"Agora integration",
			"healthcare tech",
			"Mahaashree",
		],
		style: `
				.article-content {
					padding: 1rem;
				}
			`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<p>
						Building a telemedicine app from scratch as a college project taught
						me a lot—not just about tech like Agora and Firebase, but about UX,
						security, and what real users need. Here's a breakdown of the tools I
						used, challenges I hit, and how I solved them.
					</p>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
