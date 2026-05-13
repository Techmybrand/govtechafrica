import re

with open('/Users/mac/Documents/Dev/Govtech_folder/govtech-v2/components/home/experience/Experience.module.scss', 'r') as f:
    content = f.read()

# Replace the entire `.card { ... }` block inside `screenMax("tablet")` up to the keyframes.
# We will match from `				.card {` to `		@keyframes card-contract-mobile {` or similar.
pattern = r'(?P<prefix>@include screenMax\("tablet"\) \{.*?\n\s*\.cards_container \{\n\s*flex-wrap: wrap;\n\s*gap: 2\.4rem;\n\n\s*\.card \{).*?(?P<suffix>\n\s*\}\n\s*\}\n\s*\}\n\n\s*@keyframes)'

new_card_block = """
					width: 100%;
					height: 10.5rem;
					padding: 2.4rem;
					border-radius: 20rem;

					.lottie_badge {
						top: 50%;
						left: 2.4rem;
						transform: translateY(-50%);
						width: 5.6rem;
						height: 5.6rem;
						border-radius: 1.6rem;
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
						width: 4.8rem;
						height: 4.8rem;
					}

					.title {
						top: 6rem;
						left: 2.4rem;

						h3 {
							font-size: 2.4rem;
							line-height: 3.2rem;
						}
					}

					.description {
						margin: 0;
						top: 2.4rem;
						left: 2.4rem;

						p {
							font-size: 1.4rem;
							line-height: 2rem;
						}
					}

					.subtext {
						top: 10rem;
						left: 2.4rem;

						p {
							font-size: 1.4rem;
							line-height: 2rem;
						}
					}

					&[data-active="true"][data-can-animate="true"]:not([data-mobile="true"]) {
						animation: card-expand-tablet-height 1s ease-out 0.3s forwards;

						.lottie_badge { animation: badge-fade-out-mobile 0.3s ease-out forwards; }
						.plus_icon { animation: plus-fade-out-mobile 0.3s ease-out forwards; }
						.description { animation: content-slide-up 0.8s ease-out 0.8s forwards; }
						.title { animation: content-slide-up 0.8s ease-out 1.0s forwards; }
						.subtext { animation: content-slide-up 0.8s ease-out 1.2s forwards; }
						.blue_overlay { animation: overlay-reveal 1.6s ease-out 2.3s forwards; }
					}

					&[data-closing="true"]:not([data-mobile="true"]) {
						height: 40rem;
						border-radius: 3.2rem;

						.blue_overlay { box-shadow: inset 0 0 0 0.1rem #7394f4; animation: overlay-cover 1s ease-in 0s forwards; }
						.subtext { opacity: 1; transform: translateY(0); animation: content-slide-down 0.5s ease-in 0.6s forwards; }
						.title { opacity: 1; transform: translateY(0); animation: content-slide-down 0.5s ease-in 0.8s forwards; }
						.description { opacity: 1; transform: translateY(0); animation: content-slide-down 0.5s ease-in 1.0s forwards; }

						animation: card-contract-tablet-height 0.625s ease-in 1.625s forwards;

						.plus_icon { opacity: 0; transform: translateY(-50%); animation: plus-fade-in-mobile 0.3s ease-out 2.0s forwards; }
						.lottie_badge { opacity: 0; animation: badge-fade-in-mobile 0.25s ease-out 2.25s forwards; }
					}

					&[data-mobile="true"] {
						height: 5.5rem;

						.plus_icon {
							width: 3.6rem;
							height: 3.6rem;
						}

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
							height: 35rem;
							border-radius: 3.2rem;

							.blue_overlay { box-shadow: inset 0 0 0 0.1rem #7394f4; animation: overlay-cover 1s ease-in 0s forwards; }
							.subtext { opacity: 1; transform: translateY(0); animation: content-slide-down 0.5s ease-in 0.6s forwards; }
							.title { opacity: 1; transform: translateY(0); animation: content-slide-down 0.5s ease-in 0.8s forwards; }
							.description { opacity: 1; transform: translateY(0); animation: content-slide-down 0.5s ease-in 1.0s forwards; }

							animation: card-contract-mobile-height 0.625s ease-in 1.625s forwards;

							.plus_icon { opacity: 0; transform: translateY(-50%); animation: plus-fade-in-mobile 0.3s ease-out 2.0s forwards; }
							.lottie_badge { opacity: 0; animation: badge-fade-in-mobile 0.25s ease-out 2.25s forwards; }
						}
					}"""

def replace_card_block(match):
    return match.group('prefix') + "\n" + new_card_block + match.group('suffix')

content = re.sub(pattern, replace_card_block, content, flags=re.DOTALL)

# Now replace the keyframes
pattern2 = r'(@keyframes card-contract-mobile \{.*?)(?=\n\s*@keyframes badge-fade-out-mobile \{)'
new_keyframes = """@keyframes card-contract-tablet-height {
			0% { height: 40rem; border-radius: 3.2rem; }
			100% { height: 10.5rem; border-radius: 20rem; }
		}

		@keyframes card-expand-tablet-height {
			0% { height: 10.5rem; border-radius: 20rem; }
			100% { height: 40rem; border-radius: 3.2rem; }
		}

		@keyframes card-contract-mobile-height {
			0% { height: 35rem; border-radius: 3.2rem; }
			100% { height: 5.5rem; border-radius: 20rem; }
		}

		@keyframes card-expand-mobile-height {
			0% { height: 5.5rem; border-radius: 20rem; }
			100% { height: 35rem; border-radius: 3.2rem; }
		}"""

content = re.sub(pattern2, new_keyframes, content, flags=re.DOTALL)

with open('/Users/mac/Documents/Dev/Govtech_folder/govtech-v2/components/home/experience/Experience.module.scss', 'w') as f:
    f.write(content)
