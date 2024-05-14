export default {
    port: 8090,
    host: "localhost",
    dbUri: "mongodb://localhost:27017/kostenteiler",
    saltWorkFactor: 10,
    publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD4Oss3lermIEdKVsyIEiSSgRZG
Wbr2VaWSr2xMiB8iOXRHWaGEV5ihKKpMavmkVrsbnUpQHTMRcts0TquSRjTAyBcX
RwfFTcpY7R5/53GN5ypS1O7v6Sdu443bt44xFsvr23pdMopr6adyPpu5tBjDFb6s
xfyBmH+9El6SR/MvuwIDAQAB
-----END PUBLIC KEY-----`,
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICXQIBAAKBgQD4Oss3lermIEdKVsyIEiSSgRZGWbr2VaWSr2xMiB8iOXRHWaGE
V5ihKKpMavmkVrsbnUpQHTMRcts0TquSRjTAyBcXRwfFTcpY7R5/53GN5ypS1O7v
6Sdu443bt44xFsvr23pdMopr6adyPpu5tBjDFb6sxfyBmH+9El6SR/MvuwIDAQAB
AoGAPsen49wPt7oMLbn8KqHkDAWH260QAwMwSAQD8OswbJh5Vx5NIkqBOKkvQPqB
PtYMpnRGejKYWt5goD8RV4JYDrZJLdFyVeVSkkHM36smZzh62JexAJcIaMvQp+xb
I4WpHEUk47JDDNWhflahnZKr9fUxIqKJOpJ6fAZcVp5BgKkCQQD81UmjjMupuYm4
mRvjadOefxP6jgfcgKAsPDdcWxCt+BFD5s13bP+6CX93irxm6zUHPLYEP0A4f0Xd
beeT59A1AkEA+1a+uXyvK643ION1aAj9CepCgVRImGHNVoitKOEN1RJIjmJbNzwE
flmqrbzD14KVxttsd8KVC3iC7pE7mT7eLwJBAIjK1Ta5vI8tpUfM/vvBjA9a7fJH
2hUBOqf0RHehhZq6dozoWQ5eWNXMwbxpwZlldKFfxZLyrcpjgedVyU+KwmkCQAnt
0lkHiPAD0N+2vKOgf0aN/5SWXMvQSUla2uRbh61cLIubbRkQgOjw5+I3K9FusjYJ
4w4UHMk4OIvuJtmV9zcCQQC7GfYWRn6cwrgiZq4oRIDdQTiTk+bhNuvhs//31cQV
1V7ZKE3YWVHoUcQfquwASB2pkIpCZhtLeUXre+xuxOU7
-----END RSA PRIVATE KEY-----`,
    accessTokenTimeToLeave: "15m",
    refreshTokenTimeToLeave: "1y",
}