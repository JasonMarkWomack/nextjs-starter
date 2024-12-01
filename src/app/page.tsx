"use client";

import React from 'react';

import { Heading, Text, Flex, Button, Grid, Icon, InlineCode, Logo, LetterFx, Arrow } from '@/once-ui/components';
import Link from 'next/link';

export default function Home() {
	const links = [
		{
			href: "https://cipheralphacapital.com/",
			title: "Institutional-Grade Dark Pools on Our Crytpo Exchange ",
		},
		{
			href: "https://cipheralphacapital.com/",
			title: "Automated Quant Algo Development",
			// description: "Build responsive layouts.",
		},
		{
			href: "https://cipheralphacapital.com/",
			title: "Trade Crypto Spots and Prepertual Futures",
		},
		{
			href: "https://cipheralphacapital.com/",
			title: "Streamlined Altcoin Integration"
			// description: "Style your app in minutes.",
		},
		{
			href: "https://cipheralphacapital.com/",
			title: "Customizable AI Bots",
			// description: "Build responsive layouts.",
		},
		{
			href: "https://cipheralphacapital.com/",
			title: "Pre-Market Trading Capabilities",
			// description: "Scale text automatically.",
		},
		{
			href: "https://cipheralphacapital.com/",
			title: "Trading Terminals",
			//  Custodial and non-custodial
		},
		{
			href: "https://cipheralphacapital.com/",
			title: "Custodial and Non Custodial Wallets",

		},
		{
			href: "https://cipheralphacapital.com/",
			title: "All-In-One Trading Platform",

		},
	];

	return (

		<Flex
			fillWidth paddingTop="l" paddingX="l"
			direction="column" alignItems="center" flex={1}>
			<Flex
				position="relative"
				as="section" overflow="hidden"
				fillWidth minHeight="0" maxWidth={68}
				direction="column" alignItems="center" flex={1}>
				<Flex
					as="main"
					direction="column" justifyContent="center"
					fillWidth fillHeight padding="l" gap="l">
					<Flex
						mobileDirection="column"
						fillWidth gap="24">
						<Flex
							position="relative"
							flex={2} paddingTop="56" paddingX="xl">
								<h1 className="font-code">CipherAlpha Capital Ltd.</h1>
						</Flex>
						<Flex
							position="relative"
							flex={4} gap="24" marginBottom="104"
							direction="column">
							{/* <InlineCode
								className="shadow-m"
								style={{
									width: 'fit-content',
									padding: 'var(--static-space-8) var(--static-space-16)',
									backdropFilter: 'blur(var(--static-space-1))'}}>
								Start by editing <span className="brand-on-background-medium">app/page.tsx</span>
							</InlineCode> */}
							<Heading
								wrap="balance"
								variant="display-strong-s">
								<span className="font-code">
									<LetterFx
										trigger="instant">
										AI-driven crypto trading designed to optimize a better financial future.


									</LetterFx>
								</span>
							</Heading>
							<Button
								id="readDocs"
								href="mailto: jw@cipheralphacapital.com"
								// <a href= "mailto: jw@cipheralphacapital.com"></a>
								variant="secondary">
								<Flex alignItems="center">
									Contact Us
									<Arrow trigger="#readDocs"/>
								</Flex>
							</Button>
						</Flex>
					</Flex>
					<Grid
						radius="l"
						border="neutral-medium"
						borderStyle="solid-1"
						columns="repeat(3, 1fr)"
						tabletColumns="1col"
						mobileColumns="1col"
						fillWidth>
						{links.map((link) => (
							<Link
								target="_blank"
								style={{ padding: 'var(--responsive-space-l)' }}
								key={link.href}
								href={link.href}>
								<Flex
									fillWidth paddingY="8" gap="8"
									direction="column">
									<Flex
										fillWidth gap="12"
										alignItems="center">
										<Text
											variant="body-strong-m" onBackground="neutral-strong">
											{link.title}
										</Text>
										{/* <Icon size="s" name="arrowUpRight" /> */}
									</Flex>
									<Text
										variant="body-default-s" onBackground="neutral-weak">
										{/* {link.description} */}
									</Text>
								</Flex>
							</Link>
						))}
					</Grid>
				</Flex>
			</Flex>
			<Flex
				as="footer"
				position="relative"
				fillWidth paddingX="l" paddingY="m"
				justifyContent="space-between">
				{/* <Text
					variant="body-default-s" onBackground="neutral-weak">
					© 2024 Once UI, <Link href="https://github.com/once-ui-system/nextjs-starter?tab=MIT-1-ov-file">MIT License</Link>
				</Text> */}
				{/* <Flex
					gap="12">
					<Button
						href="https://github.com/once-ui-system/nextjs-starter"
						prefixIcon="github" size="s" variant="tertiary">
						GitHub
					</Button>
					<Button
						href="https://discord.com/invite/5EyAQ4eNdS"
						prefixIcon="discord" size="s" variant="tertiary">
						Discord
					</Button>
				</Flex> */}
			</Flex>
		</Flex>
	);
}
