import { useAdvantagePrice } from './useAdvantagePrice'
export const useSubmit = () => {
    const { show, setShow, showProdNoAdvantatePriceDrawer, PriceAdvantageDrawer } = useAdvantagePrice()

    const handleSubmit = () => {    
        showProdNoAdvantatePriceDrawer()
    }

    return { show, setShow, handleSubmit, PriceAdvantageDrawer }
}