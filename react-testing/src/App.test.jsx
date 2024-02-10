import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";


describe("comprueba que la pagina del contador funciona",async ()=>{
    

    it("la pagina se renderiza correctamente", async()=>{
        render(<App></App>)

        // tiene que aparecer un H1 que diga CONTADOR
        const h1 = await screen.findByText("CONTADOR")

        expect(h1).toBeInTheDocument()
    })

    it("tiene que haber un boton para incrementar", async()=>{
        render(<App></App>)

        const boton = await screen.getByText("+")

        expect(boton).toBeInTheDocument()
    })

    it("tiene que haber un boton para restar", async()=>{
        render(<App></App>)

        const boton = await screen.getByText("-")

        expect(boton).toBeInTheDocument()
    })

    it("tiene que haber un texto que marque el estado del contador y esté en 0",async ()=>{
        render(<App></App>)

        const contador = await screen.getByTestId("contador")

        expect(contador).toBeInTheDocument()

        expect(contador.textContent).toBe("0")
    })

    it("el boton de sumar deberia aumentar el contador en 1 unidad",async()=>{
        render(<App></App>)

        const boton = await screen.getByText("+")

        // click en el boton
        fireEvent.click(boton)

        // obtener el contador
        const contador = await screen.getByTestId("contador")

        // comprobar que el contador tiene un "1"
        expect(contador.textContent).toBe("1")
    })

    it("el boton de sumar deberia aumentar el contador en 2 unidad tras 2 clicks",async()=>{
        render(<App></App>)

        const boton = await screen.getByText("+")

        // click en el boton
        fireEvent.click(boton)
        fireEvent.click(boton)

        // obtener el contador
        const contador = await screen.getByTestId("contador")

        // comprobar que el contador tiene un "1"
        expect(contador.textContent).toBe("2")
    })

    it("el boton de restar deberia reducir el contador en 1 unidad",async()=>{
        render(<App></App>)

        const boton = await screen.getByText("-")

        // click en el boton
        fireEvent.click(boton)

        // obtener el contador
        const contador = await screen.getByTestId("contador")

        // comprobar que el contador tiene un "1"
        expect(contador.textContent).toBe("-1")
    })

    it("el boton de restar deberia reducir el contador en 2 unidad tras 2 clicks",async()=>{
        render(<App></App>)

        const boton = await screen.getByText("-")

        // click en el boton
        fireEvent.click(boton)
        fireEvent.click(boton)

        // obtener el contador
        const contador = await screen.getByTestId("contador")

        // comprobar que el contador tiene un "1"
        expect(contador.textContent).toBe("-2")
    })

    it("al pulsar el boton de sumar y despues del restar, el contador no deberia variar",async()=>{
        render(<App></App>)
        const botonRestar = await screen.getByText("-")
        const botonSumar = await screen.getByText("+")

        fireEvent.click(botonRestar)

        fireEvent.click(botonSumar)

        const contador = await screen.getByTestId("contador")

        expect(contador.textContent).toBe("0")

    })


})