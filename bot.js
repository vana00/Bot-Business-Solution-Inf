const Telegraf = require('telegraf');

const bot = new Telegraf('7182612683:AAEt7mXBOsLHJ9geDF-rMOp8uhepG2uYGpw');


bot.start((ctx) => {
    handleStart(ctx);
});

bot.command('start', (ctx) => {
    handleStart(ctx);
});

function handleStart(ctx) {
    const missionMessage = `*Tentang Infomedia*\n\n` +
        `PT Infomedia Nusantara merupakan subsidiary PT Telkom Indonesia yang memfokuskan bisnisnya pada penyediaan solusi Business Process Outsourcing (BPO) melalui 2 portofolio bisnis, yaitu: Customer Relationship Management (CRM) dan Shared Service Operation (SSO). Hingga saat ini, kami telah mengelola proses bisnis dari 600 lebih perusahaan dari berbagai segmen industri. Dalam perjalanan bisnisnya, Infomedia menguasai 53% market share contact center, yang terus dikembangkan dengan mengadopsi teknologi digital terdepan untuk memastikan experience terbaik bagi pelanggan.\n\n` +
        `*Tujuan*\nBerkolaborasi untuk mewujudkan bangsa digital yang lebih berdaya saing dan memberikan nilai tambah yang terbaik bagi para pemangku kepentingan.\n\n` +
        `*Visi*\nMenjadi mitra BPO Digital pilihan utama untuk memajukan masyarakat.\n\n` +
        `*Misi*\n1. Menghadirkan solusi CRM menyeluruh dan terintegrasi untuk menghasilkan pengalaman dan nilai bisnis yang terbaik bagi pelanggan.\n2. Menghadirkan solusi SSO yang didukung dengan teknologi terkini untuk mendisrupsi pengelolaan proses back office pelanggan.`;

    const ourProductMessage = `Our Product`;

    ctx.reply(missionMessage, { parse_mode: 'Markdown' }).then(() => {
        ctx.reply(ourProductMessage, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Customer Relationship Management (CRM)', callback_data: 'crm' }],
                    [{ text: 'Shared Service Operational (SSO)', callback_data: 'sso' }]
                ]
            }
        });
    });


bot.action('crm', (ctx) => {
  const crmResponse = `CRM Product\n\n` +
                      `Manfaatkan keunggulan digital CRM perusahaan agar semakin efektif mengelola saluran komunikasi, melacak interaksi, dan melakukan personalisasi dalam aktivitas pemasaran. Dengan Digitalisasi CRM, perusahaan tidak hanya meningkatkan kepuasan dan loyalitas pelanggan, namun juga memberikan wawasan yang sangat berharga untuk strategi bisnis di masa yang akan datang.\n\n` +
                      `Temukan beragam solusi pengelolaan pelayanan pelanggan atau customer relationship management (CRM) terlengkap. Hubungi tim kami untuk membantu anda menemukan solusi CRM terbaik.`;
  ctx.reply(crmResponse, {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'CRM Analytic', callback_data: 'crm_analytic' }],
        [{ text: 'CRM Platform', callback_data: 'crm_platform' }],
        [{ text: 'CRM Solution', callback_data: 'crm_solution' }]
      ]
    }
  });
});

bot.action('crm_platform', (ctx) => {
  const crmPlatformResponse = `CRM Platform\n\n` +
                                `Rasakan pengalaman untuk semakin dekat dengan pelanggan, mengetahui ketertarikan mereka serta memberikan masukan berupa hasil analitik yang akan bermanfaat bagi produk dan jasa.\n\n` +
                                `Omnix adalah platform omnichannel terintegrasi yang merupakan karya anak bangsa. Omnix mengorkestrasikan seluruh channel komunikasi melalui seamless interaction journey, sehingga seluruh interaksi bersama pelanggan dari berbagai channel komunikasi dapat dikelola dalam satu platform.`;
  ctx.reply(crmPlatformResponse, {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'OMNIX Services', callback_data: 'omnix_services' }],
        [{ text: 'OMNIX Sales', callback_data: 'omnix_sales' }],
        [{ text: 'OMNIX Marketing', callback_data: 'omnix_marketing' }],
        [{ text: 'OMNIX Survey', callback_data: 'omnix_survey' }],
        [{ text: 'OMNIX AI & Automation', callback_data: 'omnix_ai_automation' }]
      ]
    }
  });
});

bot.action('omnix_services', (ctx) => {
  const crmPlatformResponse = `OMNIX Services\n\n`;
  ctx.reply(crmPlatformResponse, {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'About OMNIX Services', callback_data: 'about_omnix_services' }],
        [{ text: 'Use Case', callback_data: 'use_case' }],
        [{ text: 'Technical Proposal', callback_data: 'technical_proposal' }],
        [{ text: 'Pricing', callback_data: 'pricing' }]
      ]
    }
  });
});


   bot.on('text', (ctx) => {
        if (ctx.message.text !== '/start') {
            handleStart(ctx);
        }
    });
}

bot.launch();