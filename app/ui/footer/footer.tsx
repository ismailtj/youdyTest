import FooterBlock from "./footerBlock";

export default function Footer() {
  return (
    <div className="max-w-5xl mx-auto flex justify-between">
      <FooterBlock title="MENTIONS LEGALES">
        <p className="text-sm">Charte des Apprentis Youdy</p>
        <p className="text-sm">
          Mentions légales et politique de confidentialité Youdy
        </p>
        <p className="text-sm">Conditions Générales d&apos;Utilisation Youdy</p>
        <p className="text-sm">
          Crédit photos : Youdy & stock.adobe & shutterstock & wix
        </p>
      </FooterBlock>
      <FooterBlock title="DECOUVREZ YOUDY">
        <p className="text-sm">Charte des Apprentis Youdy</p>
        <p className="text-sm">L&apos;histoire de Youdy</p>
        <p className="text-sm">Les Valeurs</p>
        <p className="text-sm">Fonctionnement</p>
      </FooterBlock>
      <FooterBlock title="RESTEZ CONNECTE">
        <p className="text-sm">Instagram</p>
        <p className="text-sm">Facebook</p>
        <p className="text-sm">Tik Tok</p>
        <p className="text-sm">Youtube</p>
      </FooterBlock>
    </div>
  );
}
