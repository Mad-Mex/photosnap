import { ContainerFeaturesBetaPhase } from "../components/ContainerFeatures/ContainerFeaturesBetaPhase"
import { HandlerPricing } from "../components/HandlerPricing/HandlerPricing"
import { HeroPricing } from "../components/Hero/HeroPricing"
import { TableComparison } from "../components/TableComparison/TableComparison"


export const PricingPage = () => {

  return (

    <div>
      {/*Hero Pricing */}
      <section>
        <HeroPricing />
      </section>

      {/*Handler Pricing */}
      <div>
        <HandlerPricing />
      </div>

      {/*Table Comparison */}
      <div>
        <TableComparison />
      </div>

      {/*Beta */}
      <section>
        <ContainerFeaturesBetaPhase />
      </section>

    </div>
  )
}
