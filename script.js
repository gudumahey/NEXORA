* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    scroll-behavior: smooth;
}
body {
    background: #050507;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    overflow-x: hidden;
}
.bg {
    position: fixed;
    inset: 0;
    z-index: -2;
    background:
        radial-gradient(
            circle at 50% 5%,
            rgba(112, 76, 180, .25),
            transparent 35%
        ),
        radial-gradient(
            circle at 0% 70%,
            rgba(40, 70, 150, .15),
            transparent 30%
        ),
        #050507;
}
.bg::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
        linear-gradient(
            rgba(255,255,255,.025) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(255,255,255,.025) 1px,
            transparent 1px
        );
    background-size: 50px 50px;
    mask-image: linear-gradient(
        to bottom,
        black,
        transparent
    );
}
/* HEADER */
header {
    position: sticky;
    top: 18px;
    z-index: 100;
    width: 92%;
    max-width: 1200px;
    margin: 20px auto;
    padding: 14px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 18px;
    background: rgba(10,10,14,.65);
    backdrop-filter: blur(20px);
}
.logo {
    font-size: 19px;
    font-weight: 900;
    letter-spacing: 3px;
}
.logo span {
    color: #a889ff;
}
nav {
    display: flex;
    gap: 30px;
}
nav a {
    text-decoration: none;
    color: #888;
    font-size: 14px;
    transition: .3s;
}
nav a:hover {
    color: white;
}
.start-btn {
    border: none;
    padding: 11px 18px;
    border-radius: 11px;
    background: white;
    color: black;
    font-weight: 700;
    cursor: pointer;
}
/* HERO */
.hero {
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 100px 20px 70px;
}
.badge {
    padding: 9px 15px;
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 100px;
    color: #b49cff;
    font-size: 10px;
    letter-spacing: 2px;
    background: rgba(255,255,255,.03);
}
.hero h1 {
    margin: 30px 0 25px;
    font-size: clamp(
        55px,
        10vw,
        125px
    );
    line-height: .9;
    letter-spacing: -7px;
}
.hero h1 span {
    background:
        linear-gradient(
            90deg,
            #fff,
            #9e7cff,
            #fff
        );
    -webkit-background-clip: text;
    color: transparent;
}
.hero > p {
    max-width: 680px;
    color: #8b8b91;
    line-height: 1.8;
    font-size: 16px;
}
.buttons {
    display: flex;
    gap: 12px;
    margin-top: 35px;
}
.primary,
.secondary {
    padding: 15px 23px;
    border-radius: 12px;
    font-weight: 700;
    cursor: pointer;
}
.primary {
    border: none;
    background: white;
    color: black;
}
.secondary {
    border: 1px solid rgba(255,255,255,.1);
    background: rgba(255,255,255,.04);
    color: white;
}
.stats {
    display: flex;
    gap: 70px;
    margin-top: 65px;
}
.stats div {
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.stats b {
    font-size: 25px;
}
.stats small {
    color: #555;
}
/* FEATURES */
.features {
    max-width: 1100px;
    margin: auto;
    padding: 110px 20px;
}
.section-heading span {
    color: #9d83ff;
    font-size: 10px;
    letter-spacing: 3px;
}
.section-heading h2 {
    margin-top: 12px;
    font-size: 48px;
    letter-spacing: -2px;
}
.cards {
    display: grid;
    grid-template-columns:
        repeat(4, 1fr);
    gap: 15px;
    margin-top: 50px;
}
.card {
    min-height: 240px;
    padding: 28px;
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 20px;
    background: rgba(255,255,255,.025);
    transition: .3s;
}
.card:hover {
    transform: translateY(-8px);
    border-color:
        rgba(255,255,255,.2);
}
.icon {
    font-size: 30px;
    margin-bottom: 30px;
}
.card h3 {
    margin-bottom: 10px;
}
.card p {
    color: #737379;
    font-size: 14px;
    line-height: 1.7;
}
/* CHAT */
.chat-section {
    width: 92%;
    max-width: 850px;
    margin: auto;
    padding: 100px 0;
}
.chat-title {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 20px;
}
.chat-title h2 {
    font-size: 28px;
}
.chat-title p {
    color: #666;
    margin-top: 5px;
}
.status {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #72ff9d;
    box-shadow:
        0 0 15px #72ff9d;
}
.chat-container {
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 22px;
    overflow: hidden;
    background:
        rgba(10,10,14,.85);
    backdrop-filter: blur(20px);
}
#messages {
    min-height: 350px;
    padding: 25px;
    overflow-y: auto;
}
.message {
    display: flex;
    gap: 12px;
    margin-bottom: 25px;
}
.avatar {
    min-width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    background: #1c1530;
    color: #b89cff;
}
.bubble {
    max-width: 80%;
}
.bubble strong {
    font-size: 13px;
}
.bubble p {
    color: #bcbcc1;
    margin-top: 7px;
    line-height: 1.6;
}
.message.user {
    justify-content: flex-end;
}
.message.user .avatar {
    display: none;
}
.message.user .bubble {
    background: #17171d;
    padding: 12px 16px;
    border-radius: 15px;
}
.suggestions {
    display: flex;
    gap: 8px;
    padding: 0 15px 15px;
    overflow-x: auto;
}
.suggestions button {
    white-space: nowrap;
    padding: 9px 12px;
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 10px;
    background: rgba(255,255,255,.03);
    color: #999;
    cursor: pointer;
}
.input-box {
    display: flex;
    gap: 10px;
    padding: 15px;
    border-top:
        1px solid rgba(255,255,255,.07);
}
textarea {
    flex: 1;
    resize: none;
    outline: none;
    border: none;
    background: transparent;
    color: white;
    font-size: 15px;
    padding: 12px;
}
textarea::placeholder {
    color: #555;
}
#send {
    width: 45px;
    height: 45px;
    border: none;
    border-radius: 12px;
    background: white;
    color: black;
    font-size: 22px;
    cursor: pointer;
}
.notice {
    text-align: center;
    padding:
        0 15px 15px;
    color: #444;
    font-size: 10px;
}
/* FOOTER */
footer {
    text-align: center;
    padding: 70px 20px;
    border-top:
        1px solid rgba(255,255,255,.06);
}
.footer-logo {
    font-size: 20px;
    font-weight: 900;
    letter-spacing: 3px;
}
footer p {
    color: #666;
    margin: 15px 0;
}
footer small {
    color: #444;
}
/* MOBILE */
@media (max-width: 800px) {
    nav {
        display: none;
    }
    .cards {
        grid-template-columns: 1fr 1fr;
    }
    .stats {
        gap: 30px;
    }
    .hero h1 {
        letter-spacing: -4px;
    }
}
@media (max-width: 500px) {
    .cards {
        grid-template-columns: 1fr;
    }
    .buttons {
        flex-direction: column;
        width: 100%;
        max-width: 300px;
    }
    .stats {
        gap: 20px;
    }
    .stats b {
        font-size: 20px;
    }
}
