import { useState, useCallback } from 'react'
import { Drawer, Button } from 'antd'

export const useAdvantagePrice = () => {
  const [show, setShow] = useState(false)
  const [isDrawerShow, setIsDrawerShow] = useState(false);
  const showProdNoAdvantatePriceDrawer = () => {
      setIsDrawerShow(true)
  }
  const PriceAdvantageDrawer = useCallback(() => {
    console.log('PriceAdvantageDrawer', isDrawerShow)
    return (
      <Drawer title="test1" open={isDrawerShow} onClose={() => setIsDrawerShow(false)}>
        <Button style={{marginRight: '10px'}} onClick={()=>setShow(true)}>导入价格申诉表格</Button>
      </Drawer>
    )
  }, [isDrawerShow])

  return { 
    showProdNoAdvantatePriceDrawer,
    PriceAdvantageDrawer,
    show,
    setShow
  }
}