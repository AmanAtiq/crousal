import React, { useState } from "react";

interface QuoteFormProps {
  color?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ color = "#967BB6" }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    eventType: "Casamento",
    guests: "50-100",
    date: "",
    time: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      const res = await fetch("/api/contact-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Erro ao enviar. Tente novamente.");
      setSuccess(true);
      setForm({
        name: "",
        phone: "",
        eventType: "Casamento",
        guests: "50-100",
        date: "",
        time: "",
        message: "",
      });
    } catch (err: any) {
      setError(err.message || "Erro desconhecido.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
      <label className="col-span-2 text-sm font-semibold text-[#4D3522]">Nome
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="h-14 rounded-2xl border-2 border-[#EEE] px-5 text-base w-full mt-1"
          placeholder="Seu nome completo"
          required
        />
      </label>
      <label className="col-span-2 text-sm font-semibold text-[#4D3522]">Telefone
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="h-14 rounded-2xl border-2 border-[#EEE] px-5 text-base w-full mt-1"
          placeholder="+244 900 000 000"
          required
        />
      </label>
      <label className="text-sm font-semibold text-[#4D3522]">Tipo de Evento
        <select
          name="eventType"
          value={form.eventType}
          onChange={handleChange}
          className="h-[58px] rounded-2xl border-2 border-[#EEE] px-5 text-base w-full mt-1"
        >
          <option>Casamento</option>
          <option>Aniversario</option>
          <option>Evento corporativo</option>
          <option>Festival</option>
        </select>
      </label>
      <label className="text-sm font-semibold text-[#4D3522]">Nº Convidados
        <select
          name="guests"
          value={form.guests}
          onChange={handleChange}
          className="h-[58px] rounded-2xl border-2 border-[#EEE] px-5 text-base w-full mt-1"
        >
          <option>50-100</option>
          <option>100-200</option>
          <option>200-300</option>
          <option>350-500</option>
        </select>
      </label>
      <label className="text-sm font-semibold text-[#4D3522]">Data
        <input
          name="date"
          value={form.date}
          onChange={handleChange}
          className="h-[58px] rounded-2xl border-2 border-[#EEE] px-5 text-base w-full mt-1"
          type="date"
          required
        />
      </label>
      <label className="text-sm font-semibold text-[#4D3522]">Horário
        <input
          name="time"
          value={form.time}
          onChange={handleChange}
          className="h-[58px] rounded-2xl border-2 border-[#EEE] px-5 text-base w-full mt-1"
          type="time"
          required
        />
      </label>
      <label className="col-span-2 text-sm font-semibold text-[#4D3522]">Mensagem adicional
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="min-h-[116px] rounded-2xl border-2 border-[#EEE] px-5 py-4 text-base w-full mt-1"
          placeholder="Cores, estilo, sabores preferidos, inspiracoes..."
        />
      </label>
      <button
        type="submit"
        disabled={loading}
        className={`col-span-2 inline-flex h-[53px] items-center justify-center gap-2 rounded-[60px] text-[13px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_10px_20px_-5px] ${loading ? "opacity-60" : ""}`}
        style={{ background: color }}
      >
        {loading ? "Enviando..." : "Solicitar orcamento"}
      </button>
      {success && <div className="col-span-2 text-green-600 mt-2">Pedido enviado com sucesso!</div>}
      {error && <div className="col-span-2 text-red-600 mt-2">{error}</div>}
    </form>
  );
};