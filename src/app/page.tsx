"use client";

import React from 'react';
import { Heading, Text, Flex, Button, Grid, Icon, InlineCode, Logo, LetterFx, Arrow } from '@/once-ui/components';
import Link from 'next/link';

export default function Home() {
	const links = [
		{
			href: "#",
			title: "Institutional-Grade Dark Pools on Our Crypto Exchange",
		},
		{
			href: "#",
			title: "Automated Quant Algo Development",
		},
		{
			href: "#",
			title: "Trade Crypto Spots and Perpetual Futures",
		},
		{
			href: "#",
			title: "Streamlined Altcoin Integration",
		},
		{
			href: "#",
			title: "Customizable AI Bots",
		},
		{
			href: "#",
			title: "Pre-Market Trading Capabilities",
		},
		{
			href: "#",
			title: "Trading Terminals",
		},
		{
			href: "#",
			title: "Custodial and Non-Custodial Wallets",
		},
		{
			href: "#",
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
							<Heading
								wrap="balance"
								variant="display-strong-s">
								<span className="font-code">
									<LetterFx
										trigger="instant">
										AI-driven crypto trading designed for a better financial future.
									</LetterFx>
								</span>
							</Heading>
							<Button
								id="readDocs"
								href="mailto: jw@cipheralphacapital.com"
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
								style={{ padding: 'var(--responsive-space-l)', pointerEvents: 'none' }}
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
									</Flex>
									<Text
										variant="body-default-s" onBackground="neutral-weak">
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
			</Flex>
		</Flex>
	);
}
