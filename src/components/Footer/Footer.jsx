import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "#FFFFFF",
				textAlign: "center",
				marginTop: "-50px",
				fontSize:"24px"
				}}>
		AZAD-MOVIE-WORLD-BD
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>CATEGORIES</Heading>
			<FooterLink href="#">Anime</FooterLink>
			<FooterLink href="#">Bangla Subtitled Movies</FooterLink>
			<FooterLink href="#">IMDb Top 250 Movies</FooterLink>
		</Column>
		<Column>
		<Heading></Heading>
			<FooterLink href="#">TV & Web Series</FooterLink>
			<FooterLink href="#">TV Show</FooterLink>
			<FooterLink href="#">English (Hollywood)</FooterLink>
			<FooterLink href="#">Animation & Cartoon Movies</FooterLink>
		</Column>
		<Column>
		<Heading></Heading>
			<FooterLink href="#">Bollywood Hindi Movies</FooterLink>
			<FooterLink href="#">2K 1080p Full HD</FooterLink>
			<FooterLink href="#">4K ULTRA-HD 2160p</FooterLink>
			<FooterLink href="#">Bangla Subtitled Movies</FooterLink>
		</Column>
		<Column>
		<Heading></Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				LinkedIn
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>		
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
