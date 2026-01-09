
function Footer() {
    return(
        <>
        <img
                src="/images/avatar.png"
                alt="avatar"
                style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    objectFit: "cover"
                }}
            />
        <h1> Trang web tạo bởi &copy; hmyndooo </h1>
        <p> Liên hệ: <a href="mailto:hmyndooo@gmail.com">hmyndooo@gmail.com</a> </p>
        </>
    );
}

export default Footer;