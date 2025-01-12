export interface TrainingData {
  category: string;
  knowledge: string[];
  examples?: {
    input: string;
    output: string;
  }[];
}

export class AITrainer {
  private trainingData: TrainingData[] = [
    {
      category: "Struktur Organisasi HMIF",
      knowledge: [
        "HMIF Universitas Majalengka berdiri pada tanggal 30 Maret 2011",
        "Terdapat 4 program studi di Fakultas Teknik: Informatika, Teknik Industri, Teknik Sipil, dan Teknik Mesin",
        "Struktur organisasi terdiri dari Dewan Pembina, Badan Pengurus Harian (BPH), dan Departemen",
        "Departemen meliputi LITBANG, Eksternal, Kominfo, dan DANUS",
        "Masa jabatan kepengurusan 1 periode sesuai SK Dekan",
      ],
      examples: [
        {
          input: "Kapan HMIF didirikan?",
          output: "HMIF Universitas Majalengka didirikan pada tanggal 30 Maret 2011",
        },
      ],
    },
    {
      category: "Visi Misi HMIF",
      knowledge: [
        "Visi: Menjadikan Himpunan Mahasiswa Informatika sebagai wadah yang inklusif dan inovatif untuk mengembangkan minat bakat, serta potensi mahasiswa",
        "Misi 1: Meningkatkan jiwa kepemimpinan dan kebersamaan",
        "Misi 2: Mengembangkan keterampilan soft skill dan hard skill",
        "Misi 3: Meningkatkan rasa kekeluargaan dan kerja sama dengan civitas akademik",
      ],
      examples: [
        {
          input: "Apa visi HMIF?",
          output:
            "Visi HMIF adalah menjadi wadah inklusif dan inovatif untuk mengembangkan minat bakat dan potensi mahasiswa Informatika",
        },
      ],
    },
    {
      category: "Komunitas di HMIF",
      knowledge: [
        "Terdapat 3 komunitas utama di lingkungan program studi Informatika:",
        "1. Komunitas Pemrograman",
        "2. Komunitas Tekinfordia",
        "3. Komunitas Robotik",
      ],
      examples: [
        {
          input: "Apa saja komunitas di Informatika?",
          output:
            "Ada tiga komunitas di Informatika: Komunitas Pemrograman, Tekinfordia, dan Robotik",
        },
      ],
    },
    {
      category: "Kepengurusan HMIF 2024/2025",
      knowledge: [
        "Ketua Himpunan: Aep Saepuloh",
        "Wakil Ketua: Desfi Silvia Aros",
        "Sekretaris 1: Haura Zahra",
        "Sekretaris 2: Mira Yunisa",
        "Bendahara 1: Retno Sari Sirotujanah",
        "Bendahara 2: Hegar Zalekania",
      ],
      examples: [
        {
          input: "Siapa ketua HMIF periode 2024/2025?",
          output: "Ketua HMIF periode 2024/2025 adalah Aep Saepuloh",
        },
      ],
    },
    {
      category: "Badan Pengurus Harian (BPH) HMIF",
      knowledge: [
        "Aep Saepuloh",
        "Desfi Silvia Aros",
        "Mira Yunisa",
        "Haura Zahra",
        "Hegar Zalekania",
        "Retno Sari Sirotujanah",
      ],
      examples: [
        {
          input: "Siapa saja Badan Pengurus Harian periode 2024/2025?",
          output:
            "Badan Pengurus Harian terdiri dari Ketua Himpunan, Wakil Ketua, Sekretaris 1, Sekretaris 2, Bendahara 1 dan Bendahara 2",
        },
      ],
    },
    {
      category: "Departemen LITBANG",
      knowledge: [
        "Departemen Penelitian dan Pengembangan (LITBANG) periode 2024/2025",
        "Koordinator: Abrar Wahid",
        "Anggota terdiri dari:",
        "- Anis Agustin",
        "- Zacky Hafsari",
        "- Ayip Lutfy Firmansyah",
        "- Wildan Zhilal Manapi",
        "- Pandu Yassar Alfaros",
        "- Puput Risna",
        "- Rintan Nurhaliza",
      ],
      examples: [
        {
          input: "Siapa koordinator departemen LITBANG?",
          output: "Koordinator Departemen LITBANG periode 2024/2025 adalah Abrar Wahid",
        },
        {
          input: "Berapa jumlah anggota LITBANG?",
          output: "Departemen LITBANG memiliki 7 anggota, dipimpin oleh Koordinator Abrar Wahid",
        },
      ],
    },
    {
      category: "Departemen Eksternal",
      knowledge: [
        "Departemen Eksternal periode 2024/2025",
        "Koordinator: M Farhan Basyari",
        "Anggota terdiri dari:",
        "- Hanabara Kuswara",
        "- Siti Nurahma Dewi",
        "- Nabhani Fatin",
        "- Dwi Ferdiansyah",
        "- Sunarjo",
        "- M Fathu Rohman",
      ],
      examples: [
        {
          input: "Siapa koordinator departemen Eksternal?",
          output: "Koordinator Departemen Eksternal periode 2024/2025 adalah M Farhan Basyari",
        },
        {
          input: "Berapa jumlah anggota Departemen Eksternal?",
          output:
            "Departemen Eksternal memiliki 6 anggota, dipimpin oleh Koordinator M Farhan Basyari",
        },
      ],
    },
    {
      category: "Departemen DANUS",
      knowledge: [
        "Departemen Dana Usaha (DANUS) periode 2024/2025",
        "Koordinator: Milhantun Nida",
        "Anggota terdiri dari:",
        "- Nurhaeni Silvia",
        "- Nur Alifaturohmah",
        "- Dia Nuriah",
        "- Ilham Fadilah",
        "- Tri Maryani",
      ],
      examples: [
        {
          input: "Siapa koordinator departemen DANUS?",
          output: "Koordinator Departemen DANUS periode 2024/2025 adalah Milhantun Nida",
        },
        {
          input: "Berapa jumlah anggota Departemen DANUS?",
          output: "Departemen DANUS memiliki 5 anggota, dipimpin oleh Koordinator Milhantun Nida",
        },
      ],
    },
    {
      category: "Dosen Pengampu Mata Kuliah Capstone Project",
      knowledge: ["Dadan Zaliluddin, S.T., M.Kom."],
      examples: [
        {
          input: "Siapa dosen pengampu mata kuliah Capstone Project?",
          output:
            "Dosen Pengampu Mata Kuliah Capstone Project adalah Dadan Zaliluddin, S.T., M.Kom.",
        },
      ],
    },
    {
      category: "Departemen Kominfo",
      knowledge: [
        "Departemen Komunikasi dan Informasi (Kominfo) periode 2024/2025",
        "Koordinator: Irki Septian Nurfadillah",
        "Anggota terdiri dari:",
        "- Putri Nabila Kosasih",
        "- Putri Maulidia",
        "- M Farhan Fadila",
        "- Salma Nurisa",
        "- Riri Nurazizah",
        "- Faizal Anugrah Pratama",
        "- Maulana Nurafli",
      ],
      examples: [
        {
          input: "Siapa koordinator departemen Kominfo?",
          output:
            "Koordinator Departemen Kominfo periode 2024/2025 adalah Irki Septian Nurfadillah",
        },
        {
          input: "Berapa jumlah anggota Departemen Kominfo?",
          output:
            "Departemen Kominfo memiliki 7 anggota, dipimpin oleh Koordinator Irki Septian Nurfadillah",
        },
      ],
    },
  ];

  generateSystemPrompt(): string {
    let prompt = "Kamu adalah asisten AI untuk HMIF Universitas Majalengka.\n\n";
    prompt += "Pengetahuan Khusus:\n";

    this.trainingData.forEach((category) => {
      prompt += `### ${category.category} ###\n`;
      category.knowledge.forEach((item) => {
        prompt += `- ${item}\n`;
      });
      prompt += "\n";
    });

    return prompt;
  }

  getTrainingExamples(): string {
    let examplePrompt = "Contoh Percakapan:\n";

    this.trainingData.forEach((category) => {
      category.examples?.forEach((example) => {
        examplePrompt += `User: ${example.input}\n`;
        examplePrompt += `AI: ${example.output}\n\n`;
      });
    });

    return examplePrompt;
  }

  // Metode untuk menambah pengetahuan baru
  addKnowledge(data: TrainingData) {
    this.trainingData.push(data);
  }
}

// Buat instance global
export const aiTrainer = new AITrainer();
