import { defineConfig } from 'drizzle-kit'
import env from "@/data/env/server";
import fs from "fs";
import path from "path";

export default defineConfig({
    out: "./src/drizzle/migrations",
    schema: "./src/drizzle/schema.ts",
    dialect: "postgresql",
    strict: true,
    verbose: true,
    dbCredentials: {
        password: env.DB_PASSWORD,
        user: env.DB_USER,
        database: env.DB_NAME,
        host: env.DB_HOST,
        port: 20436,
        ssl: {
            rejectUnauthorized: false,
            ca: Buffer.from(`
                -----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUMpw0d7AzVFq2xeM5lxhTvGlDfWIwDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvYjdjOWI1ZGEtZGUxOC00OWU5LWFmNGMtYzNhOWNiY2Zk
ZGViIFByb2plY3QgQ0EwHhcNMjQxMTE0MTgyOTQwWhcNMzQxMTEyMTgyOTQwWjA6
MTgwNgYDVQQDDC9iN2M5YjVkYS1kZTE4LTQ5ZTktYWY0Yy1jM2E5Y2JjZmRkZWIg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAJmVQgJj
A8h+4MvRLRcJbAqyHVI626FuGEWvvd1JanuwDmxynLIN3mRCqzUDyrbdim3WC6X8
gLjxwuBNc/45VLxoU4glHacA6v8n6lEWDmLFDO4zxnvoPKytcc/YYxXPFD5Rgabq
TClbbrfRNXIGcSjMhespP8UHfZMD0Q+6CxtMhWFnXIOMHwkPOB5/4AiZrx/2lQd3
1WKd2kXVSj63g/snPh5QJDqOCsgqwU7kP3bnCq5Zt2wO5VyG2fsOEPMkr/R2yuY8
sv9VmuKXVO6QA5uBFaLUhu+yqRwytkQQL1O0SI4MQxbKVMLG5TKh0FKNVERRyA9X
KvS/dYQ88H8G0oqAL2xqgmMuxxb9QEqRF5x1Nve+Pt0IcwTbt7SR/d2Tlsb/Ypv0
ndtj6hH9u7voILGujauRFh6sGJb5ER7ACssXWb4hEp4lo4hb+xKyxpGLnjaLIkpv
yEBwDE61+n9XGHSjMke1i7gAVQ7gGbRhTbv/1Qb45HhLoHW92cATmTwGkQIDAQAB
oz8wPTAdBgNVHQ4EFgQU1W/a2F1R4fhBUOLWpGUfLfFdFsEwDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAHxwHOeBDy8oBlMB
+16cKVCzgVjPWtm4m+mufdHRAF26MDdBVEE3n2wn81w1BKhSfUvCnhVkk10EtE+0
NqyukQXtEUHf86ss9m4ddWUdUYzPyF4fN43zjtHqiLeX1XsKKntB4NFU8Uh+Nz4O
XEbsaVzvUmMdaqxRnyPCjuBhap3BznU+kCQ9+MSSMGLnq9yDJu6LgRt41WgCJL4K
+irFCfj39atKlVwoF/2tfb7xE5D9NB5vXCYfxBeVlc90tjskYWx6JqmokT2+mt9P
hato9DB06NzEgrpCXk9kdhv6LBfWXRl2VnQ6CucJFE0D77dqcF0vkmLxqjsmBNtT
grw2DCQ6H95icZMsn1USbx3O0L2YeJTyeO1Pfw2Mar475HhMJVM/Ju4PwoWG5MIr
UV0/t1EwcbOSYs5bS79/W+Ya9CaxxN4X0HU0w4VdCNHJuZxDK/owBC14F3prkhvH
WFAXgfm1mFX/3fw5a+s0GJ6vS78TkSH2T6wGx4DcCMmb3pCM9A==
-----END CERTIFICATE-----

            `, 'utf-8'),
        },

    },
})