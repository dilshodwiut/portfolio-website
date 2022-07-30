import * as React from "react";
import Image from "next/image";
import Card from "@/components/atoms/Card/Card";
import classes from "./Slider.module.scss";

export default function Slider() {
  return (
    <div className={classes.slider}>
      <div className={classes.slider__track}>
        <div className={classes.slider__track__item}>
          <Card className={classes.slider__track__item__wrapper}>
            <Image
              src="/icons/utas.svg"
              width={100}
              height={50}
              alt="UTAS logo"
            />
          </Card>
        </div>
        <div className={classes.slider__track__item}>
          <Card className={classes.slider__track__item__wrapper}>
            <Image
              src="/icons/aloqabank.svg"
              width={100}
              height={50}
              alt="Aloqabank logo"
            />
          </Card>
        </div>
        <div className={classes.slider__track__item}>
          <Card className={classes.slider__track__item__wrapper}>
            <Image
              src="/icons/car24.jpg"
              width={150}
              height={50}
              alt="Car24 logo"
            />
          </Card>
        </div>
        <div className={classes.slider__track__item}>
          <Card className={classes.slider__track__item__wrapper}>
            <Image
              src="/icons/safia.webp"
              width={150}
              height={150}
              alt="Safia logo"
            />
          </Card>
        </div>
        <div className={classes.slider__track__item}>
          <Card className={classes.slider__track__item__wrapper}>
            <Image
              src="data:image/png;base64,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"
              width={100}
              height={25}
              alt="GoodZone logo"
            />
          </Card>
        </div>
        <div className={classes.slider__track__item}>
          <Card className={classes.slider__track__item__wrapper}>
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUyIiBoZWlnaHQ9IjQ5IiB2aWV3Qm94PSIwIDAgMjUyIDQ5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTguNDQgMi44OEMyMy4xNzYgMi44OCAyNy4zMTQ3IDMuODQgMzAuODU2IDUuNzZDMzQuNDQgNy42MzczMyAzNy4xOTIgMTAuMjgyNyAzOS4xMTIgMTMuNjk2QzQxLjAzMiAxNy4xMDkzIDQxLjk5MiAyMS4wMTMzIDQxLjk5MiAyNS40MDhDNDEuOTkyIDI5Ljc2IDQxLjAxMDcgMzMuNjQyNyAzOS4wNDggMzcuMDU2QzM3LjEyOCA0MC40NjkzIDM0LjM3NiA0My4xNTczIDMwLjc5MiA0NS4xMkMyNy4yNTA3IDQ3LjA0IDIzLjEzMzMgNDggMTguNDQgNDhIMC41ODRWMi44OEgxOC40NFpNMTcuNDggMzYuOTI4QzIxLjE0OTMgMzYuOTI4IDI0LjAyOTMgMzUuOTI1MyAyNi4xMiAzMy45MkMyOC4yMTA3IDMxLjkxNDcgMjkuMjU2IDI5LjA3NzMgMjkuMjU2IDI1LjQwOEMyOS4yNTYgMjEuNjk2IDI4LjIxMDcgMTguODM3MyAyNi4xMiAxNi44MzJDMjQuMDI5MyAxNC43ODQgMjEuMTQ5MyAxMy43NiAxNy40OCAxMy43NkgxMy4xMjhWMzYuOTI4SDE3LjQ4Wk04MS45NTA1IDI5LjYzMkM4MS45NTA1IDMwLjYxMzMgODEuODg2NSAzMS41OTQ3IDgxLjc1ODUgMzIuNTc2SDU4LjAxNDVDNTguMTQyNSAzNC41Mzg3IDU4LjY3NTggMzYuMDEwNyA1OS42MTQ1IDM2Ljk5MkM2MC41OTU4IDM3LjkzMDcgNjEuODMzMiAzOC40IDYzLjMyNjUgMzguNEM2NS40MTcyIDM4LjQgNjYuOTEwNSAzNy40NjEzIDY3LjgwNjUgMzUuNTg0SDgxLjE4MjVDODAuNjI3OCAzOC4wNTg3IDc5LjUzOTggNDAuMjc3MyA3Ny45MTg1IDQyLjI0Qzc2LjMzOTggNDQuMTYgNzQuMzM0NSA0NS42NzQ3IDcxLjkwMjUgNDYuNzg0QzY5LjQ3MDUgNDcuODkzMyA2Ni43ODI1IDQ4LjQ0OCA2My44Mzg1IDQ4LjQ0OEM2MC4yOTcyIDQ4LjQ0OCA1Ny4xMzk4IDQ3LjcwMTMgNTQuMzY2NSA0Ni4yMDhDNTEuNjM1OCA0NC43MTQ3IDQ5LjQ4MTIgNDIuNTgxMyA0Ny45MDI1IDM5LjgwOEM0Ni4zNjY1IDM3LjAzNDcgNDUuNTk4NSAzMy43NzA3IDQ1LjU5ODUgMzAuMDE2QzQ1LjU5ODUgMjYuMjYxMyA0Ni4zNjY1IDIzLjAxODcgNDcuOTAyNSAyMC4yODhDNDkuNDM4NSAxNy41MTQ3IDUxLjU3MTggMTUuMzgxMyA1NC4zMDI1IDEzLjg4OEM1Ny4wNzU4IDEyLjM5NDcgNjAuMjU0NSAxMS42NDggNjMuODM4NSAxMS42NDhDNjcuMzc5OCAxMS42NDggNzAuNTE1OCAxMi4zNzMzIDczLjI0NjUgMTMuODI0Qzc1Ljk3NzIgMTUuMjc0NyA3OC4xMTA1IDE3LjM2NTMgNzkuNjQ2NSAyMC4wOTZDODEuMTgyNSAyMi43ODQgODEuOTUwNSAyNS45NjI3IDgxLjk1MDUgMjkuNjMyWk02OS4xNTA1IDI2LjQ5NkM2OS4xNTA1IDI0Ljk2IDY4LjYzODUgMjMuNzY1MyA2Ny42MTQ1IDIyLjkxMkM2Ni41OTA1IDIyLjAxNiA2NS4zMTA1IDIxLjU2OCA2My43NzQ1IDIxLjU2OEM2Mi4yMzg1IDIxLjU2OCA2MC45Nzk4IDIxLjk5NDcgNTkuOTk4NSAyMi44NDhDNTkuMDE3MiAyMy42NTg3IDU4LjM3NzIgMjQuODc0NyA1OC4wNzg1IDI2LjQ5Nkg2OS4xNTA1Wk05OS42MjggMC42Mzk5OTlWNDhIODcuMDg0VjAuNjM5OTk5SDk5LjYyOFpNMTQxLjA3NiAyOS42MzJDMTQxLjA3NiAzMC42MTMzIDE0MS4wMTIgMzEuNTk0NyAxNDAuODg0IDMyLjU3NkgxMTcuMTRDMTE3LjI2OCAzNC41Mzg3IDExNy44MDEgMzYuMDEwNyAxMTguNzQgMzYuOTkyQzExOS43MjEgMzcuOTMwNyAxMjAuOTU4IDM4LjQgMTIyLjQ1MiAzOC40QzEyNC41NDIgMzguNCAxMjYuMDM2IDM3LjQ2MTMgMTI2LjkzMiAzNS41ODRIMTQwLjMwOEMxMzkuNzUzIDM4LjA1ODcgMTM4LjY2NSA0MC4yNzczIDEzNy4wNDQgNDIuMjRDMTM1LjQ2NSA0NC4xNiAxMzMuNDYgNDUuNjc0NyAxMzEuMDI4IDQ2Ljc4NEMxMjguNTk2IDQ3Ljg5MzMgMTI1LjkwOCA0OC40NDggMTIyLjk2NCA0OC40NDhDMTE5LjQyMiA0OC40NDggMTE2LjI2NSA0Ny43MDEzIDExMy40OTIgNDYuMjA4QzExMC43NjEgNDQuNzE0NyAxMDguNjA2IDQyLjU4MTMgMTA3LjAyOCAzOS44MDhDMTA1LjQ5MiAzNy4wMzQ3IDEwNC43MjQgMzMuNzcwNyAxMDQuNzI0IDMwLjAxNkMxMDQuNzI0IDI2LjI2MTMgMTA1LjQ5MiAyMy4wMTg3IDEwNy4wMjggMjAuMjg4QzEwOC41NjQgMTcuNTE0NyAxMTAuNjk3IDE1LjM4MTMgMTEzLjQyOCAxMy44ODhDMTE2LjIwMSAxMi4zOTQ3IDExOS4zOCAxMS42NDggMTIyLjk2NCAxMS42NDhDMTI2LjUwNSAxMS42NDggMTI5LjY0MSAxMi4zNzMzIDEzMi4zNzIgMTMuODI0QzEzNS4xMDIgMTUuMjc0NyAxMzcuMjM2IDE3LjM2NTMgMTM4Ljc3MiAyMC4wOTZDMTQwLjMwOCAyMi43ODQgMTQxLjA3NiAyNS45NjI3IDE0MS4wNzYgMjkuNjMyWk0xMjguMjc2IDI2LjQ5NkMxMjguMjc2IDI0Ljk2IDEyNy43NjQgMjMuNzY1MyAxMjYuNzQgMjIuOTEyQzEyNS43MTYgMjIuMDE2IDEyNC40MzYgMjEuNTY4IDEyMi45IDIxLjU2OEMxMjEuMzY0IDIxLjU2OCAxMjAuMTA1IDIxLjk5NDcgMTE5LjEyNCAyMi44NDhDMTE4LjE0MiAyMy42NTg3IDExNy41MDIgMjQuODc0NyAxMTcuMjA0IDI2LjQ5NkgxMjguMjc2Wk0xNjMuNDI1IDM2LjE2TDE3MC4xNDUgMTIuMDk2SDE4My41MjFMMTcxLjE2OSA0OEgxNTUuNTUzTDE0My4yMDEgMTIuMDk2SDE1Ni41NzdMMTYzLjQyNSAzNi4xNlpNMjIyLjA3NiAyOS42MzJDMjIyLjA3NiAzMC42MTMzIDIyMi4wMTIgMzEuNTk0NyAyMjEuODg0IDMyLjU3NkgxOTguMTRDMTk4LjI2OCAzNC41Mzg3IDE5OC44MDEgMzYuMDEwNyAxOTkuNzQgMzYuOTkyQzIwMC43MjEgMzcuOTMwNyAyMDEuOTU4IDM4LjQgMjAzLjQ1MiAzOC40QzIwNS41NDIgMzguNCAyMDcuMDM2IDM3LjQ2MTMgMjA3LjkzMiAzNS41ODRIMjIxLjMwOEMyMjAuNzUzIDM4LjA1ODcgMjE5LjY2NSA0MC4yNzczIDIxOC4wNDQgNDIuMjRDMjE2LjQ2NSA0NC4xNiAyMTQuNDYgNDUuNjc0NyAyMTIuMDI4IDQ2Ljc4NEMyMDkuNTk2IDQ3Ljg5MzMgMjA2LjkwOCA0OC40NDggMjAzLjk2NCA0OC40NDhDMjAwLjQyMiA0OC40NDggMTk3LjI2NSA0Ny43MDEzIDE5NC40OTIgNDYuMjA4QzE5MS43NjEgNDQuNzE0NyAxODkuNjA2IDQyLjU4MTMgMTg4LjAyOCAzOS44MDhDMTg2LjQ5MiAzNy4wMzQ3IDE4NS43MjQgMzMuNzcwNyAxODUuNzI0IDMwLjAxNkMxODUuNzI0IDI2LjI2MTMgMTg2LjQ5MiAyMy4wMTg3IDE4OC4wMjggMjAuMjg4QzE4OS41NjQgMTcuNTE0NyAxOTEuNjk3IDE1LjM4MTMgMTk0LjQyOCAxMy44ODhDMTk3LjIwMSAxMi4zOTQ3IDIwMC4zOCAxMS42NDggMjAzLjk2NCAxMS42NDhDMjA3LjUwNSAxMS42NDggMjEwLjY0MSAxMi4zNzMzIDIxMy4zNzIgMTMuODI0QzIxNi4xMDIgMTUuMjc0NyAyMTguMjM2IDE3LjM2NTMgMjE5Ljc3MiAyMC4wOTZDMjIxLjMwOCAyMi43ODQgMjIyLjA3NiAyNS45NjI3IDIyMi4wNzYgMjkuNjMyWk0yMDkuMjc2IDI2LjQ5NkMyMDkuMjc2IDI0Ljk2IDIwOC43NjQgMjMuNzY1MyAyMDcuNzQgMjIuOTEyQzIwNi43MTYgMjIuMDE2IDIwNS40MzYgMjEuNTY4IDIwMy45IDIxLjU2OEMyMDIuMzY0IDIxLjU2OCAyMDEuMTA1IDIxLjk5NDcgMjAwLjEyNCAyMi44NDhDMTk5LjE0MiAyMy42NTg3IDE5OC41MDIgMjQuODc0NyAxOTguMjA0IDI2LjQ5NkgyMDkuMjc2Wk0yMzkuNzUzIDE4LjQzMkMyNDEuMTYxIDE2LjM4NCAyNDIuODY4IDE0Ljc2MjcgMjQ0Ljg3MyAxMy41NjhDMjQ2Ljg3OCAxMi4zNzMzIDI0OS4wMzMgMTEuNzc2IDI1MS4zMzcgMTEuNzc2VjI1LjE1MkgyNDcuODE3QzI0NS4wODYgMjUuMTUyIDI0My4wNiAyNS42ODUzIDI0MS43MzcgMjYuNzUyQzI0MC40MTQgMjcuODE4NyAyMzkuNzUzIDI5LjY3NDcgMjM5Ljc1MyAzMi4zMlY0OEgyMjcuMjA5VjEyLjA5NkgyMzkuNzUzVjE4LjQzMloiIGZpbGw9IiNGRjU3MjIiLz4KPC9zdmc+Cg=="
              width={100}
              height={50}
              alt="Delever logo"
            />
          </Card>
        </div>
        <div className={classes.slider__track__item}>
          <Card className={classes.slider__track__item__wrapper}>
            <Image
              src="/icons/utas.svg"
              width={100}
              height={50}
              alt="UTAS logo"
            />
          </Card>
        </div>
        <div className={classes.slider__track__item}>
          <Card className={classes.slider__track__item__wrapper}>
            <Image
              src="/icons/aloqabank.svg"
              width={100}
              height={50}
              alt="Aloqabank logo"
            />
          </Card>
        </div>
        <div className={classes.slider__track__item}>
          <Card className={classes.slider__track__item__wrapper}>
            <Image
              src="/icons/car24.jpg"
              width={150}
              height={50}
              alt="Car24 logo"
            />
          </Card>
        </div>
        <div className={classes.slider__track__item}>
          <Card className={classes.slider__track__item__wrapper}>
            <Image
              src="/icons/safia.webp"
              width={150}
              height={150}
              alt="Safia logo"
            />
          </Card>
        </div>
        <div className={classes.slider__track__item}>
          <Card className={classes.slider__track__item__wrapper}>
            <Image
              src="data:image/png;base64,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"
              width={100}
              height={25}
              alt="GoodZone logo"
            />
          </Card>
        </div>
        <div className={classes.slider__track__item}>
          <Card className={classes.slider__track__item__wrapper}>
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUyIiBoZWlnaHQ9IjQ5IiB2aWV3Qm94PSIwIDAgMjUyIDQ5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTguNDQgMi44OEMyMy4xNzYgMi44OCAyNy4zMTQ3IDMuODQgMzAuODU2IDUuNzZDMzQuNDQgNy42MzczMyAzNy4xOTIgMTAuMjgyNyAzOS4xMTIgMTMuNjk2QzQxLjAzMiAxNy4xMDkzIDQxLjk5MiAyMS4wMTMzIDQxLjk5MiAyNS40MDhDNDEuOTkyIDI5Ljc2IDQxLjAxMDcgMzMuNjQyNyAzOS4wNDggMzcuMDU2QzM3LjEyOCA0MC40NjkzIDM0LjM3NiA0My4xNTczIDMwLjc5MiA0NS4xMkMyNy4yNTA3IDQ3LjA0IDIzLjEzMzMgNDggMTguNDQgNDhIMC41ODRWMi44OEgxOC40NFpNMTcuNDggMzYuOTI4QzIxLjE0OTMgMzYuOTI4IDI0LjAyOTMgMzUuOTI1MyAyNi4xMiAzMy45MkMyOC4yMTA3IDMxLjkxNDcgMjkuMjU2IDI5LjA3NzMgMjkuMjU2IDI1LjQwOEMyOS4yNTYgMjEuNjk2IDI4LjIxMDcgMTguODM3MyAyNi4xMiAxNi44MzJDMjQuMDI5MyAxNC43ODQgMjEuMTQ5MyAxMy43NiAxNy40OCAxMy43NkgxMy4xMjhWMzYuOTI4SDE3LjQ4Wk04MS45NTA1IDI5LjYzMkM4MS45NTA1IDMwLjYxMzMgODEuODg2NSAzMS41OTQ3IDgxLjc1ODUgMzIuNTc2SDU4LjAxNDVDNTguMTQyNSAzNC41Mzg3IDU4LjY3NTggMzYuMDEwNyA1OS42MTQ1IDM2Ljk5MkM2MC41OTU4IDM3LjkzMDcgNjEuODMzMiAzOC40IDYzLjMyNjUgMzguNEM2NS40MTcyIDM4LjQgNjYuOTEwNSAzNy40NjEzIDY3LjgwNjUgMzUuNTg0SDgxLjE4MjVDODAuNjI3OCAzOC4wNTg3IDc5LjUzOTggNDAuMjc3MyA3Ny45MTg1IDQyLjI0Qzc2LjMzOTggNDQuMTYgNzQuMzM0NSA0NS42NzQ3IDcxLjkwMjUgNDYuNzg0QzY5LjQ3MDUgNDcuODkzMyA2Ni43ODI1IDQ4LjQ0OCA2My44Mzg1IDQ4LjQ0OEM2MC4yOTcyIDQ4LjQ0OCA1Ny4xMzk4IDQ3LjcwMTMgNTQuMzY2NSA0Ni4yMDhDNTEuNjM1OCA0NC43MTQ3IDQ5LjQ4MTIgNDIuNTgxMyA0Ny45MDI1IDM5LjgwOEM0Ni4zNjY1IDM3LjAzNDcgNDUuNTk4NSAzMy43NzA3IDQ1LjU5ODUgMzAuMDE2QzQ1LjU5ODUgMjYuMjYxMyA0Ni4zNjY1IDIzLjAxODcgNDcuOTAyNSAyMC4yODhDNDkuNDM4NSAxNy41MTQ3IDUxLjU3MTggMTUuMzgxMyA1NC4zMDI1IDEzLjg4OEM1Ny4wNzU4IDEyLjM5NDcgNjAuMjU0NSAxMS42NDggNjMuODM4NSAxMS42NDhDNjcuMzc5OCAxMS42NDggNzAuNTE1OCAxMi4zNzMzIDczLjI0NjUgMTMuODI0Qzc1Ljk3NzIgMTUuMjc0NyA3OC4xMTA1IDE3LjM2NTMgNzkuNjQ2NSAyMC4wOTZDODEuMTgyNSAyMi43ODQgODEuOTUwNSAyNS45NjI3IDgxLjk1MDUgMjkuNjMyWk02OS4xNTA1IDI2LjQ5NkM2OS4xNTA1IDI0Ljk2IDY4LjYzODUgMjMuNzY1MyA2Ny42MTQ1IDIyLjkxMkM2Ni41OTA1IDIyLjAxNiA2NS4zMTA1IDIxLjU2OCA2My43NzQ1IDIxLjU2OEM2Mi4yMzg1IDIxLjU2OCA2MC45Nzk4IDIxLjk5NDcgNTkuOTk4NSAyMi44NDhDNTkuMDE3MiAyMy42NTg3IDU4LjM3NzIgMjQuODc0NyA1OC4wNzg1IDI2LjQ5Nkg2OS4xNTA1Wk05OS42MjggMC42Mzk5OTlWNDhIODcuMDg0VjAuNjM5OTk5SDk5LjYyOFpNMTQxLjA3NiAyOS42MzJDMTQxLjA3NiAzMC42MTMzIDE0MS4wMTIgMzEuNTk0NyAxNDAuODg0IDMyLjU3NkgxMTcuMTRDMTE3LjI2OCAzNC41Mzg3IDExNy44MDEgMzYuMDEwNyAxMTguNzQgMzYuOTkyQzExOS43MjEgMzcuOTMwNyAxMjAuOTU4IDM4LjQgMTIyLjQ1MiAzOC40QzEyNC41NDIgMzguNCAxMjYuMDM2IDM3LjQ2MTMgMTI2LjkzMiAzNS41ODRIMTQwLjMwOEMxMzkuNzUzIDM4LjA1ODcgMTM4LjY2NSA0MC4yNzczIDEzNy4wNDQgNDIuMjRDMTM1LjQ2NSA0NC4xNiAxMzMuNDYgNDUuNjc0NyAxMzEuMDI4IDQ2Ljc4NEMxMjguNTk2IDQ3Ljg5MzMgMTI1LjkwOCA0OC40NDggMTIyLjk2NCA0OC40NDhDMTE5LjQyMiA0OC40NDggMTE2LjI2NSA0Ny43MDEzIDExMy40OTIgNDYuMjA4QzExMC43NjEgNDQuNzE0NyAxMDguNjA2IDQyLjU4MTMgMTA3LjAyOCAzOS44MDhDMTA1LjQ5MiAzNy4wMzQ3IDEwNC43MjQgMzMuNzcwNyAxMDQuNzI0IDMwLjAxNkMxMDQuNzI0IDI2LjI2MTMgMTA1LjQ5MiAyMy4wMTg3IDEwNy4wMjggMjAuMjg4QzEwOC41NjQgMTcuNTE0NyAxMTAuNjk3IDE1LjM4MTMgMTEzLjQyOCAxMy44ODhDMTE2LjIwMSAxMi4zOTQ3IDExOS4zOCAxMS42NDggMTIyLjk2NCAxMS42NDhDMTI2LjUwNSAxMS42NDggMTI5LjY0MSAxMi4zNzMzIDEzMi4zNzIgMTMuODI0QzEzNS4xMDIgMTUuMjc0NyAxMzcuMjM2IDE3LjM2NTMgMTM4Ljc3MiAyMC4wOTZDMTQwLjMwOCAyMi43ODQgMTQxLjA3NiAyNS45NjI3IDE0MS4wNzYgMjkuNjMyWk0xMjguMjc2IDI2LjQ5NkMxMjguMjc2IDI0Ljk2IDEyNy43NjQgMjMuNzY1MyAxMjYuNzQgMjIuOTEyQzEyNS43MTYgMjIuMDE2IDEyNC40MzYgMjEuNTY4IDEyMi45IDIxLjU2OEMxMjEuMzY0IDIxLjU2OCAxMjAuMTA1IDIxLjk5NDcgMTE5LjEyNCAyMi44NDhDMTE4LjE0MiAyMy42NTg3IDExNy41MDIgMjQuODc0NyAxMTcuMjA0IDI2LjQ5NkgxMjguMjc2Wk0xNjMuNDI1IDM2LjE2TDE3MC4xNDUgMTIuMDk2SDE4My41MjFMMTcxLjE2OSA0OEgxNTUuNTUzTDE0My4yMDEgMTIuMDk2SDE1Ni41NzdMMTYzLjQyNSAzNi4xNlpNMjIyLjA3NiAyOS42MzJDMjIyLjA3NiAzMC42MTMzIDIyMi4wMTIgMzEuNTk0NyAyMjEuODg0IDMyLjU3NkgxOTguMTRDMTk4LjI2OCAzNC41Mzg3IDE5OC44MDEgMzYuMDEwNyAxOTkuNzQgMzYuOTkyQzIwMC43MjEgMzcuOTMwNyAyMDEuOTU4IDM4LjQgMjAzLjQ1MiAzOC40QzIwNS41NDIgMzguNCAyMDcuMDM2IDM3LjQ2MTMgMjA3LjkzMiAzNS41ODRIMjIxLjMwOEMyMjAuNzUzIDM4LjA1ODcgMjE5LjY2NSA0MC4yNzczIDIxOC4wNDQgNDIuMjRDMjE2LjQ2NSA0NC4xNiAyMTQuNDYgNDUuNjc0NyAyMTIuMDI4IDQ2Ljc4NEMyMDkuNTk2IDQ3Ljg5MzMgMjA2LjkwOCA0OC40NDggMjAzLjk2NCA0OC40NDhDMjAwLjQyMiA0OC40NDggMTk3LjI2NSA0Ny43MDEzIDE5NC40OTIgNDYuMjA4QzE5MS43NjEgNDQuNzE0NyAxODkuNjA2IDQyLjU4MTMgMTg4LjAyOCAzOS44MDhDMTg2LjQ5MiAzNy4wMzQ3IDE4NS43MjQgMzMuNzcwNyAxODUuNzI0IDMwLjAxNkMxODUuNzI0IDI2LjI2MTMgMTg2LjQ5MiAyMy4wMTg3IDE4OC4wMjggMjAuMjg4QzE4OS41NjQgMTcuNTE0NyAxOTEuNjk3IDE1LjM4MTMgMTk0LjQyOCAxMy44ODhDMTk3LjIwMSAxMi4zOTQ3IDIwMC4zOCAxMS42NDggMjAzLjk2NCAxMS42NDhDMjA3LjUwNSAxMS42NDggMjEwLjY0MSAxMi4zNzMzIDIxMy4zNzIgMTMuODI0QzIxNi4xMDIgMTUuMjc0NyAyMTguMjM2IDE3LjM2NTMgMjE5Ljc3MiAyMC4wOTZDMjIxLjMwOCAyMi43ODQgMjIyLjA3NiAyNS45NjI3IDIyMi4wNzYgMjkuNjMyWk0yMDkuMjc2IDI2LjQ5NkMyMDkuMjc2IDI0Ljk2IDIwOC43NjQgMjMuNzY1MyAyMDcuNzQgMjIuOTEyQzIwNi43MTYgMjIuMDE2IDIwNS40MzYgMjEuNTY4IDIwMy45IDIxLjU2OEMyMDIuMzY0IDIxLjU2OCAyMDEuMTA1IDIxLjk5NDcgMjAwLjEyNCAyMi44NDhDMTk5LjE0MiAyMy42NTg3IDE5OC41MDIgMjQuODc0NyAxOTguMjA0IDI2LjQ5NkgyMDkuMjc2Wk0yMzkuNzUzIDE4LjQzMkMyNDEuMTYxIDE2LjM4NCAyNDIuODY4IDE0Ljc2MjcgMjQ0Ljg3MyAxMy41NjhDMjQ2Ljg3OCAxMi4zNzMzIDI0OS4wMzMgMTEuNzc2IDI1MS4zMzcgMTEuNzc2VjI1LjE1MkgyNDcuODE3QzI0NS4wODYgMjUuMTUyIDI0My4wNiAyNS42ODUzIDI0MS43MzcgMjYuNzUyQzI0MC40MTQgMjcuODE4NyAyMzkuNzUzIDI5LjY3NDcgMjM5Ljc1MyAzMi4zMlY0OEgyMjcuMjA5VjEyLjA5NkgyMzkuNzUzVjE4LjQzMloiIGZpbGw9IiNGRjU3MjIiLz4KPC9zdmc+Cg=="
              width={100}
              height={50}
              alt="Delever logo"
            />
          </Card>
        </div>
      </div>
    </div>
  );
}
