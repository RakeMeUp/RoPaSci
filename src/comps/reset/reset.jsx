import './css/reset.scss'

import resetImg from '../../img/reset.svg'

export default function Reset() {

    // It is lazy I know. Sue me.
  return (
    <button className="reset--btn" onClick={()=>window.location.reload(false)}>
        <img src={resetImg} alt="reset" />
    </button>
  )
}
