
function Header() {
    return (
        <header style={styles.header}>
            <img
                src="/images/avatar.png"
                alt="avatar"
                style={styles.avatar}
            />

            <div>
                <h1 style={styles.title}>Welcome to My Website</h1>
                <p style={styles.subtitle}>
                    Trang web được tạo bởi &copy; hmyndooo
                </p>
            </div>
        </header>
    );
}

const styles = {
    header: {
        display: "flex",
        alignItems: "center",
        padding: "16px 32px",
        backgroundColor: "#f5f5f5",
        borderBottom: "2px solid #ddd"
    },
    avatar: {
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        objectFit: "cover",
        marginRight: "16px"
    },
    title: {
        margin: 0
    },
    subtitle: {
        margin: 0,
        color: "#555"
    }
};

export default Header;
