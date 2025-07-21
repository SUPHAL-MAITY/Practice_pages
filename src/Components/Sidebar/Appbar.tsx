

const Appbar = () => {
  return (
    <div  className="fixed bottom-0 left-0  bg-gray-100 h-16 w-full flex justify-around items-center">
         <i className="fa-solid fa-house  fa-lg"></i>
            <img
          src="/shorts_logo.png"
          className="w-[24px] h-[24px] ml-6"
          alt=""
        />
         <img
          src="/video_logo.png"
          className="w-[20px] h-[24px] ml-6"
          alt=""
        />
        <img
              src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/385800/385819.2.png"
              className="w-[32px] h-[32px] rounded-full "
              alt=""
        />

    </div>
  )
}

export default Appbar
