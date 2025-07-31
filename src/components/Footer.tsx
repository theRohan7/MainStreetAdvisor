import { ImageWithFallback } from "./figma/FallbackWithImage";
import mainStreetLogo from "figma:asset/a7536a4f3d4e695faf8d8865fa3667464f3c6dab.png";

export function Footer() {
  return (
    <footer className="w-full bg-muted/30 border-t border-border px-4 py-6 mt-auto sm:px-6 sm:py-8 lg:px-[40px] lg:py-[32px]">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Partner Firm Info */}
          <div className="lg:col-span-1">
            <div className="mb-3 lg:mb-4">
              {/* <ImageWithFallback 
                src={mainStreetLogo} 
                alt="MainStreet Advisors" 
                className="h-5 w-[120px] sm:h-6 sm:w-[160px] object-contain"
              /> */}
              <h2>MainStreetAdvisors</h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Comprehensive wealth management solutions powered by advanced analytics and AI insights.
            </p>
          </div>

          {/* Legal Disclaimers */}
          <div className="lg:col-span-2">
            <h4 className="font-medium mb-3 text-sm lg:text-base">Important Disclosures</h4>
            <div className="text-xs sm:text-sm lg:text-xs text-muted-foreground space-y-2 lg:space-y-2">
              <p className="leading-relaxed">
                Investment advisory services offered through [Partner Firm], a registered investment adviser. 
                Securities offered through [Broker-Dealer], member FINRA/SIPC.
              </p>
              <p className="leading-relaxed">
                The information presented here is for informational purposes only and should not be considered 
                as investment advice. Past performance does not guarantee future results. All investments 
                involve risk, including potential loss of principal.
              </p>
              <p className="leading-relaxed">
                This platform provides portfolio management tools and analytics. Individual investment 
                decisions should be made in consultation with your financial advisor and based on your 
                specific financial situation and objectives.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-4 mt-6 lg:pt-6 lg:mt-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-xs text-muted-foreground order-2 sm:order-1">
              © 2025 [Partner Firm Name]. All rights reserved. Powered by Magnifi Platform.
            </p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-muted-foreground order-1 sm:order-2">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">FINRA BrokerCheck</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}