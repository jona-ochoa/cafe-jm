import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinkItems,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  WebsiteRights,
  SocialIconLink,
  QuerubinDiv,
  QuerubinText,
} from "./FooterElements";
import { animateScroll as scroll } from "react-scroll";
import querubinlogo from "../../images/logo3.png";

// To link outside of the website, use normal a tags

const Footer = () => {
  // Function from react-scroll
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Acerca de </FooterLinkTitle>
              <FooterLink to="/"> Cómo funciona </FooterLink>
              <FooterLink to="/"> Testimonios </FooterLink>
              <FooterLink to="/"> Carreras </FooterLink>
              <FooterLink to="/"> Inversores </FooterLink>
              <FooterLink to="/"> Terminos de servicios </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Contáctenos </FooterLinkTitle>
              <FooterLink to="/"> Contacto </FooterLink>
              <FooterLink to="/"> Soporte </FooterLink>
              <FooterLink to="/"> Destinos </FooterLink>
              <FooterLink to="/"> Patrocinios </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Videos </FooterLinkTitle>
              <FooterLink to="/"> Enviar Video </FooterLink>
              <FooterLink to="/"> Embajadores </FooterLink>
              <FooterLink to="/"> Agencia </FooterLink>
              <FooterLink to="/"> Influencers </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Social Media </FooterLinkTitle>
              <FooterLink to="/"> Instagram </FooterLink>
              <FooterLink to="/"> Facebook </FooterLink>
              <FooterLink to="/"> Youtube </FooterLink>
              <FooterLink to="/"> Twitter </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Café-JM
            </SocialLogo>
            <WebsiteRights>
              {" "}
              Café-JM © {new Date().getFullYear()} Todos los derechos
              reservados.{" "}
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
      <QuerubinDiv>
        <QuerubinText>Desarrollado por Querubin Sistemas.</QuerubinText>
        <SocialIconLink
          href="https://querubin-sistemas.vercel.app"
          target="_blank"
          aria-label="Querubin"
        >
          <img
            src={querubinlogo}
            alt="querubin-sistemas"
            width={75}
            height={75}
          />
        </SocialIconLink>
      </QuerubinDiv>
    </FooterContainer>
  );
};

export default Footer;
