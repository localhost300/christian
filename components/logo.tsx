import Image from "next/image";

export function Logo({ footer = false }: { footer?: boolean }) {
  if (footer) {
    return (
      <a className="logo footer-logo" href="#top" aria-label="Christian Charles Olsen">
        <span className="footer-monogram" aria-hidden="true">
          <Image src="/cco-logo.png" width={155} height={70} alt="" />
        </span>
        <span className="footer-logo-text">Christian<br />Charles<br />Olsen</span>
      </a>
    );
  }

  return (
    <a className="logo" href="#top">
      <Image
        src="/cco-logo.png"
        width={155}
        height={70}
        alt="Christian Charles Olsen, Financial Advisor and Broker"
      />
    </a>
  );
}
