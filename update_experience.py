import re

with open('/Users/mac/Documents/Dev/Govtech_folder/govtech-v2/components/home/experience/Experience.module.scss', 'r') as f:
    content = f.read()

target1 = """						// All cards open on mobile — blue is just a border ring
						&[data-mobile="true"][data-active="true"] {
							width: 100%;
							max-width: 44rem;
							.blue_overlay {
								box-shadow: inset 0 0 0 0.1rem #00BF4D;
								// box-shadow: inset 0 0 0 0.1rem transparent;
							}
							.lottie_badge {
								opacity: 0;
							}
							.plus_icon {
								display: none;
							}
							.description {
								opacity: 1;
								transform: none;
								top: 2.4rem;
								left: 2.4rem;
								height: auto;
							}
							.title {
								opacity: 1;
								transform: none;
								top: 6rem;
								left: 2.4rem;
							}
							.subtext {
								opacity: 1;
								transform: none;
								top: 9rem;
								left: 2.4rem;
								height: auto;
							}
						}"""

# A more robust regex replacement for target1
pattern1 = r'// All cards open on mobile — blue is just a border ring\n\s*&\[data-mobile="true"\]\[data-active="true"\] \{.*?\n\s*\}\n'

replacement1 = """					// Mobile rules: horizontal pill closed state, animating to full height
					&[data-mobile="true"] {
						width: 100%;
						height: 10.5rem;
						border-radius: 20rem;
						.lottie_badge {
							top: 50%;
							left: 2.4rem;
							transform: translateY(-50%);
							width: 5.6rem;
							height: 5.6rem;
							opacity: 1;
						}
						.plus_icon {
							bottom: auto;
							top: 50%;
							left: auto;
							right: 2.4rem;
							transform: translateY(-50%);
							display: flex;
							opacity: 1;
						}
						.title { top: 6rem; left: 2.4rem; }
						.description { top: 2.4rem; left: 2.4rem; }
						.subtext { top: 10rem; left: 2.4rem; }

						&[data-active="true"][data-can-animate="true"] {
							animation: card-expand-mobile-height 1s ease-out 0.3s forwards;
							.lottie_badge { animation: badge-fade-out-mobile 0.3s ease-out forwards; }
							.plus_icon { animation: plus-fade-out-mobile 0.3s ease-out forwards; }
							.description { animation: content-slide-up 0.8s ease-out 0.8s forwards; }
							.title { animation: content-slide-up 0.8s ease-out 1.0s forwards; }
							.subtext { animation: content-slide-up 0.8s ease-out 1.2s forwards; }
							.blue_overlay { animation: overlay-reveal 1.6s ease-out 2.3s forwards; }
						}
						&[data-closing="true"] {
							height: 40rem;
							border-radius: 3.2rem;
							.blue_overlay { box-shadow: inset 0 0 0 0.1rem #7394f4; animation: overlay-cover 1s ease-in 0s forwards; }
							.subtext { opacity: 1; transform: translateY(0); animation: content-slide-down 0.5s ease-in 0.6s forwards; }
							.title { opacity: 1; transform: translateY(0); animation: content-slide-down 0.5s ease-in 0.8s forwards; }
							.description { opacity: 1; transform: translateY(0); animation: content-slide-down 0.5s ease-in 1.0s forwards; }
							animation: card-contract-mobile-height 0.625s ease-in 1.625s forwards;
							.plus_icon { opacity: 0; transform: translateY(-50%); animation: plus-fade-in-mobile 0.3s ease-out 2.0s forwards; }
							.lottie_badge { opacity: 0; animation: badge-fade-in-mobile 0.25s ease-out 2.25s forwards; }
						}
					}
"""

content = re.sub(pattern1, replacement1, content, flags=re.DOTALL)

pattern2 = r'(@keyframes card-expand-mobile \{.*?100% \{.*?width: 44rem;.*?max-width: 44rem;.*?\}\n\s*\})'
replacement2 = r"""\1
		@keyframes card-contract-mobile-height {
			0% { height: 40rem; border-radius: 3.2rem; }
			100% { height: 10.5rem; border-radius: 20rem; }
		}
		@keyframes card-expand-mobile-height {
			0% { height: 10.5rem; border-radius: 20rem; }
			100% { height: 40rem; border-radius: 3.2rem; }
		}
		@keyframes badge-fade-out-mobile {
			0% { opacity: 1; transform: translateY(-50%) scale(1); }
			100% { opacity: 0; transform: translateY(-50%) scale(0.75); }
		}
		@keyframes badge-fade-in-mobile {
			0% { opacity: 0; transform: translateY(-50%) scale(0.75); }
			100% { opacity: 1; transform: translateY(-50%) scale(1); }
		}
		@keyframes plus-fade-out-mobile {
			0% { opacity: 1; transform: translateY(-50%); }
			100% { opacity: 0; transform: translateY(0); }
		}
		@keyframes plus-fade-in-mobile {
			0% { opacity: 0; transform: translateY(0); }
			100% { opacity: 1; transform: translateY(-50%); }
		}"""

content = re.sub(pattern2, replacement2, content, flags=re.DOTALL)

# Let's also remove the overriding height inside screenMax("mobile")
pattern3 = r'(\.cards_container \{\s*gap: 1\.6rem;\s*\.card \{\s*)height: 35rem;'
replacement3 = r'\1'
content = re.sub(pattern3, replacement3, content)


with open('/Users/mac/Documents/Dev/Govtech_folder/govtech-v2/components/home/experience/Experience.module.scss', 'w') as f:
    f.write(content)
