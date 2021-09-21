import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

const Ad = () => {
	// Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
	const openModal = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<div className="video-area">
				<div className="container">
					<div className="video-box mt-0">
						<div className="image">
							<img
								src="/images/video-img2.jpg"
								className="shadow"
								alt="image"
							/>
						</div>
						<Link href="#">
							<a
								onClick={(e) => {
									e.preventDefault();
									openModal();
								}}
								className="video-btn popup-youtube"
							>
								<i className="flaticon-play"></i>
							</a>
						</Link>
					</div>
				</div>
			</div>
			<ModalVideo
				channel="youtube"
				isOpen={!isOpen}
				videoId="bk7McNUjWgw"
				onClose={() => setIsOpen(!isOpen)}
			/>
		</>
	);
};

export default Ad;
