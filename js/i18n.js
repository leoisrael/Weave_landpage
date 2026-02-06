/**
 * Trovul Landing Page - Internationalization (i18n)
 * Supports: English (default) and Portuguese
 */

const translations = {
    en: {
        // Meta & Title
        'meta.title': 'Trovul - The Software that Replaces Audio Hardware',
        'meta.description': 'Stream audio between PCs over local network. Zero cables, zero extra hardware. Replace physical mixers for a fraction of the price.',

        // Nav
        'nav.features': 'Features',
        'nav.compare': 'Compare',
        'nav.pricing': 'Pricing',
        'nav.earlyAccess': 'Early Access',

        // Hero
        'hero.badge': 'In active development',
        'hero.title1': 'The Software that',
        'hero.title2': 'Replaces Hardware',
        'hero.title3': 'for Audio',
        'hero.subtitle': 'Real-time audio streaming between PCs. Zero cables, zero extra hardware.<br>Replace your $500 mixer with software.',
        'hero.cta': 'Join Waitlist',
        'hero.demo': 'View Demo',
        'hero.stat.latency': 'Latency',
        'hero.stat.setup': 'Setup',
        'hero.stat.hw': 'Extra HW',

        // Problem Section
        'problem.title': 'The Problem',
        'problem.subtitle': 'Billions in wasted hardware',
        'problem.mixer.title': 'USB Mixers',
        'problem.mixer.desc': 'Single PC, fixed configuration, physical cables',
        'problem.pro.title': 'Professional Mixers',
        'problem.pro.desc': 'Technical complexity, maintenance, physical space',
        'problem.cables.title': 'Audio Cables',
        'problem.cables.desc': 'Physical limitation, signal quality, mess',
        'problem.statement1': "We're in <strong>2026</strong>.",
        'problem.statement2': 'We have <strong>1Gbps</strong> internet, CPUs with <strong>16+ cores</strong>, <strong>10Gbps</strong> local networks.',
        'problem.statement3': 'Why do we still use physical cables to route audio?',

        // Solution Section
        'solution.title': 'The Solution',
        'solution.tagline': '"Software that does what hardware can\'t."',
        'solution.pc1': 'Gaming PC',
        'solution.pc2': 'Streaming PC',
        'solution.connection': 'Local Network • <10ms',
        'solution.benefit1': '2-minute installation',
        'solution.benefit2': 'Zero audio cables',
        'solution.benefit3': 'Zero extra hardware',

        // Features Section
        'features.title': 'Features',
        'features.subtitle': 'Everything you need, nothing you don\'t',
        'features.streaming.title': 'Audio Streaming',
        'features.streaming.desc': 'Stream audio between PCs in real-time over local network with imperceptible latency.',
        'features.discovery.title': 'Auto-Discovery',
        'features.discovery.desc': 'PCs find each other automatically. Zero network config, zero manual IPs.',
        'features.universal.title': 'Universal Device Support',
        'features.universal.desc': 'Bluetooth, USB, analog - any audio device works.',
        'features.monitoring.title': 'Real-time Monitoring',
        'features.monitoring.desc': 'Diagnostic panel with latency, packets, and quality metrics.',
        'features.mixer.title': 'Virtual Mixer',
        'features.mixer.desc': 'Per-source volume control, EQ, compressor - all in software.',
        'features.routing.title': 'Per-App Routing',
        'features.routing.desc': 'Choose which apps to send to which PC. Discord here, game there.',
        'features.comingSoon': 'Coming soon',

        // Comparison Section
        'compare.title': 'Comparison',
        'compare.subtitle': 'Trovul vs. The competition',
        'compare.aspect': 'Aspect',
        'compare.hardware': 'Dedicated Hardware',
        'compare.software': 'Current Software',
        'compare.price': 'Price',
        'compare.setup': 'Setup',
        'compare.multipc': 'Multi-PC',
        'compare.cables': 'Cables',
        'compare.updates': 'Updates',
        'compare.flexibility': 'Flexibility',
        'compare.no': 'No',
        'compare.limited': 'Limited',
        'compare.native': 'Native',
        'compare.several': 'Several',
        'compare.some': 'Some',
        'compare.zero': 'Zero',
        'compare.firmware': 'Manual firmware',
        'compare.irregular': 'Irregular',
        'compare.automatic': 'Automatic',
        'compare.fixed': 'Fixed',
        'compare.unlimited': 'Unlimited',

        // Use Cases Section
        'usecases.title': 'For Whom?',
        'usecases.subtitle': 'Markets that need Trovul',
        'usecases.gaming.title': 'Gaming & Esports',
        'usecases.gaming.desc': 'Dual-PC setup without cables. Game on PC1, stream on PC2, audio flowing magically.',
        'usecases.streamers.title': 'Streamers & Creators',
        'usecases.streamers.desc': 'Professional audio quality without investing $500+ in hardware.',
        'usecases.podcasters.title': 'Podcasters',
        'usecases.podcasters.desc': 'Multiple hosts, multiple machines, one unified audio stream.',
        'usecases.corporate.title': 'Corporate',
        'usecases.corporate.desc': 'Call centers, trading floors, studios - unified communication.',
        'usecases.education.title': 'Education',
        'usecases.education.desc': 'Teacher demonstrates, students listen in real-time. Frictionless hybrid classes.',
        'usecases.support.title': 'Tech Support',
        'usecases.support.desc': 'Hear exactly what the client is hearing to diagnose problems.',

        // Pricing Section
        'pricing.title': 'Pricing',
        'pricing.subtitle': 'Simple and fair',
        'pricing.personal': 'Personal',
        'pricing.free': 'Free',
        'pricing.pro': 'Pro',
        'pricing.team': 'Team',
        'pricing.popular': 'Popular',
        'pricing.month': '/month',
        'pricing.personal.devices': '2 devices',
        'pricing.personal.stereo': 'Stereo streaming',
        'pricing.personal.discovery': 'Auto-discovery',
        'pricing.personal.updates': 'Automatic updates',
        'pricing.personal.noMixer': 'Virtual mixer',
        'pricing.personal.noRouting': 'Per-app routing',
        'pricing.pro.devices': 'Unlimited devices',
        'pricing.pro.surround': '5.1/7.1 audio',
        'pricing.pro.mixer': 'Full virtual mixer',
        'pricing.pro.routing': 'Per-app routing',
        'pricing.pro.hotkeys': 'Global hotkeys',
        'pricing.pro.support': 'Priority support',
        'pricing.team.all': 'Everything in Pro',
        'pricing.team.users': '10 users',
        'pricing.team.central': 'Central management',
        'pricing.team.profiles': 'Shared profiles',
        'pricing.team.analytics': 'Usage analytics',
        'pricing.team.support': 'Dedicated support',
        'pricing.btn.free': 'Start Free',
        'pricing.btn.waitlist': 'Join Waitlist',
        'pricing.btn.contact': 'Contact',

        // Tech Specs Section
        'specs.title': 'Technical Specifications',
        'specs.subtitle': 'For the nerds (like us)',
        'specs.latency': 'Latency',
        'specs.latency.note': 'On local network',
        'specs.bandwidth': 'Bandwidth',
        'specs.bandwidth.note': 'Per stream',
        'specs.cpu': 'CPU Usage',
        'specs.cpu.note': 'Receiver',
        'specs.packets': 'Packet Rate',
        'specs.packets.note': 'Optimized UDP',
        'specs.stack': 'Stack',

        // Waitlist Section
        'waitlist.title': 'Be the First to Test',
        'waitlist.subtitle': 'Trovul is in active development. Join the waitlist for early access.',
        'waitlist.placeholder': 'your@email.com',
        'waitlist.btn': 'Join Waitlist',
        'waitlist.note': 'No spam. Only important updates.',
        'waitlist.proof.waitlist': 'on waitlist',
        'waitlist.proof.testers': 'beta testers',
        'waitlist.proof.packets': 'packets/day',

        // Footer
        'footer.tagline': '"Because audio shouldn\'t need cables."',
        'footer.features': 'Features',
        'footer.pricing': 'Pricing',
        'footer.specs': 'Specs',
        'footer.waitlist': 'Waitlist',
        'footer.copyright': '© 2026 Trovul. All rights reserved.',

        // Form responses
        'form.sending': 'Sending...',
        'form.success': '✓ You\'re on the list!',
        'form.error': 'Error. Try again.'
    },

    pt: {
        // Meta & Title
        'meta.title': 'Trovul - O Software que Substitui Hardware de Áudio',
        'meta.description': 'Streaming de áudio entre PCs via rede local. Zero cabos, zero hardware adicional. Substitui mixers físicos por uma fração do preço.',

        // Nav
        'nav.features': 'Features',
        'nav.compare': 'Comparativo',
        'nav.pricing': 'Preços',
        'nav.earlyAccess': 'Early Access',

        // Hero
        'hero.badge': 'Em desenvolvimento ativo',
        'hero.title1': 'O Software que',
        'hero.title2': 'Substitui Hardware',
        'hero.title3': 'de Áudio',
        'hero.subtitle': 'Streaming de áudio entre PCs em tempo real. Zero cabos, zero hardware adicional.<br>Substitua seu mixer de $500 por software.',
        'hero.cta': 'Entrar na Waitlist',
        'hero.demo': 'Ver Demo',
        'hero.stat.latency': 'Latência',
        'hero.stat.setup': 'Setup',
        'hero.stat.hw': 'HW Extra',

        // Problem Section
        'problem.title': 'O Problema',
        'problem.subtitle': 'Bilhões em hardware desperdiçado',
        'problem.mixer.title': 'Mixers USB',
        'problem.mixer.desc': 'Um único PC, configuração fixa, cabos físicos',
        'problem.pro.title': 'Mixers Profissionais',
        'problem.pro.desc': 'Complexidade técnica, manutenção, espaço físico',
        'problem.cables.title': 'Cabos de Áudio',
        'problem.cables.desc': 'Limitação física, qualidade de sinal, bagunça',
        'problem.statement1': 'Estamos em <strong>2026</strong>.',
        'problem.statement2': 'Temos internet de <strong>1Gbps</strong>, CPUs com <strong>16+ núcleos</strong>, redes locais de <strong>10Gbps</strong>.',
        'problem.statement3': 'Por que ainda usamos cabos físicos para rotear áudio?',

        // Solution Section
        'solution.title': 'A Solução',
        'solution.tagline': '"Software que faz o que hardware não consegue fazer."',
        'solution.pc1': 'PC Gaming',
        'solution.pc2': 'PC Streaming',
        'solution.connection': 'Rede Local • <10ms',
        'solution.benefit1': 'Instalação em 2 minutos',
        'solution.benefit2': 'Zero cabos de áudio',
        'solution.benefit3': 'Zero hardware adicional',

        // Features Section
        'features.title': 'Features',
        'features.subtitle': 'Tudo que você precisa, nada que não precisa',
        'features.streaming.title': 'Audio Streaming',
        'features.streaming.desc': 'Transmita áudio entre PCs em tempo real via rede local com latência imperceptível.',
        'features.discovery.title': 'Auto-Discovery',
        'features.discovery.desc': 'PCs se encontram automaticamente. Zero configuração de rede, zero IPs manuais.',
        'features.universal.title': 'Universal Device Support',
        'features.universal.desc': 'Bluetooth, USB, analógico - qualquer dispositivo de áudio funciona.',
        'features.monitoring.title': 'Real-time Monitoring',
        'features.monitoring.desc': 'Painel de diagnóstico com métricas de latência, pacotes e qualidade.',
        'features.mixer.title': 'Mixer Virtual',
        'features.mixer.desc': 'Controle de volume por fonte, EQ, compressor - tudo em software.',
        'features.routing.title': 'Per-App Routing',
        'features.routing.desc': 'Escolha quais aplicativos enviar para qual PC. Discord aqui, game ali.',
        'features.comingSoon': 'Em breve',

        // Comparison Section
        'compare.title': 'Comparativo',
        'compare.subtitle': 'Trovul vs. A concorrência',
        'compare.aspect': 'Aspecto',
        'compare.hardware': 'Hardware Dedicado',
        'compare.software': 'Software Atual',
        'compare.price': 'Preço',
        'compare.setup': 'Setup',
        'compare.multipc': 'Multi-PC',
        'compare.cables': 'Cabos',
        'compare.updates': 'Updates',
        'compare.flexibility': 'Flexibilidade',
        'compare.no': 'Não',
        'compare.limited': 'Limitado',
        'compare.native': 'Nativo',
        'compare.several': 'Vários',
        'compare.some': 'Alguns',
        'compare.zero': 'Zero',
        'compare.firmware': 'Firmware manual',
        'compare.irregular': 'Irregular',
        'compare.automatic': 'Automático',
        'compare.fixed': 'Fixa',
        'compare.unlimited': 'Ilimitada',

        // Use Cases Section
        'usecases.title': 'Para Quem?',
        'usecases.subtitle': 'Mercados que precisam de Trovul',
        'usecases.gaming.title': 'Gaming & Esports',
        'usecases.gaming.desc': 'Setup dual-PC sem cabos. Game no PC1, stream no PC2, áudio fluindo magicamente.',
        'usecases.streamers.title': 'Streamers & Criadores',
        'usecases.streamers.desc': 'Qualidade de áudio profissional sem investir $500+ em hardware.',
        'usecases.podcasters.title': 'Podcasters',
        'usecases.podcasters.desc': 'Múltiplos hosts, múltiplas máquinas, um único fluxo de áudio unificado.',
        'usecases.corporate.title': 'Corporativo',
        'usecases.corporate.desc': 'Call centers, trading floors, estúdios - comunicação unificada.',
        'usecases.education.title': 'Educação',
        'usecases.education.desc': 'Professor demonstra, alunos ouvem em tempo real. Aulas híbridas sem fricção.',
        'usecases.support.title': 'Suporte Técnico',
        'usecases.support.desc': 'Ouça exatamente o que o cliente está ouvindo para diagnosticar problemas.',

        // Pricing Section
        'pricing.title': 'Preços',
        'pricing.subtitle': 'Simples e justo',
        'pricing.personal': 'Personal',
        'pricing.free': 'Grátis',
        'pricing.pro': 'Pro',
        'pricing.team': 'Team',
        'pricing.popular': 'Popular',
        'pricing.month': '/mês',
        'pricing.personal.devices': '2 dispositivos',
        'pricing.personal.stereo': 'Streaming stereo',
        'pricing.personal.discovery': 'Auto-discovery',
        'pricing.personal.updates': 'Updates automáticos',
        'pricing.personal.noMixer': 'Mixer virtual',
        'pricing.personal.noRouting': 'Per-app routing',
        'pricing.pro.devices': 'Dispositivos ilimitados',
        'pricing.pro.surround': 'Áudio 5.1/7.1',
        'pricing.pro.mixer': 'Mixer virtual completo',
        'pricing.pro.routing': 'Per-app routing',
        'pricing.pro.hotkeys': 'Hotkeys globais',
        'pricing.pro.support': 'Suporte prioritário',
        'pricing.team.all': 'Tudo do Pro',
        'pricing.team.users': '10 usuários',
        'pricing.team.central': 'Gerenciamento central',
        'pricing.team.profiles': 'Profiles compartilhados',
        'pricing.team.analytics': 'Analytics de uso',
        'pricing.team.support': 'Suporte dedicado',
        'pricing.btn.free': 'Começar Grátis',
        'pricing.btn.waitlist': 'Entrar na Waitlist',
        'pricing.btn.contact': 'Contato',

        // Tech Specs Section
        'specs.title': 'Especificações Técnicas',
        'specs.subtitle': 'Para os nerds (como nós)',
        'specs.latency': 'Latência',
        'specs.latency.note': 'Em rede local',
        'specs.bandwidth': 'Bandwidth',
        'specs.bandwidth.note': 'Por stream',
        'specs.cpu': 'CPU Usage',
        'specs.cpu.note': 'Receiver',
        'specs.packets': 'Packet Rate',
        'specs.packets.note': 'UDP optimizado',
        'specs.stack': 'Stack',

        // Waitlist Section
        'waitlist.title': 'Seja o Primeiro a Testar',
        'waitlist.subtitle': 'Trovul está em desenvolvimento ativo. Entre na waitlist para acesso antecipado.',
        'waitlist.placeholder': 'seu@email.com',
        'waitlist.btn': 'Entrar na Waitlist',
        'waitlist.note': 'Sem spam. Só atualizações importantes.',
        'waitlist.proof.waitlist': 'na waitlist',
        'waitlist.proof.testers': 'beta testers',
        'waitlist.proof.packets': 'pacotes/dia',

        // Footer
        'footer.tagline': '"Porque áudio não deveria ter cabos."',
        'footer.features': 'Features',
        'footer.pricing': 'Preços',
        'footer.specs': 'Specs',
        'footer.waitlist': 'Waitlist',
        'footer.copyright': '© 2026 Trovul. Todos os direitos reservados.',

        // Form responses
        'form.sending': 'Enviando...',
        'form.success': '✓ Você está na lista!',
        'form.error': 'Erro. Tente novamente.'
    }
};

// i18n Manager
const i18n = {
    currentLang: 'en',

    init() {
        // Check localStorage for saved preference
        const saved = localStorage.getItem('trovul-lang');
        if (saved && translations[saved]) {
            this.currentLang = saved;
        } else {
            // Check browser language
            const browserLang = navigator.language.substring(0, 2);
            if (browserLang === 'pt') {
                this.currentLang = 'pt';
            }
        }

        this.updatePage();
        this.initLanguageSwitcher();
    },

    t(key) {
        return translations[this.currentLang][key] || translations['en'][key] || key;
    },

    setLanguage(lang) {
        if (translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('trovul-lang', lang);
            this.updatePage();
            this.updateSwitcher();
        }
    },

    updatePage() {
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.t(key);

            // Check if translation contains HTML
            if (translation.includes('<')) {
                el.innerHTML = translation;
            } else {
                el.textContent = translation;
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            el.placeholder = this.t(el.getAttribute('data-i18n-placeholder'));
        });

        // Update document lang attribute
        document.documentElement.lang = this.currentLang === 'pt' ? 'pt-BR' : 'en';

        // Update meta tags
        document.title = this.t('meta.title');
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.content = this.t('meta.description');
        }
    },

    initLanguageSwitcher() {
        const switcher = document.querySelector('.lang-switcher');
        if (!switcher) return;

        switcher.addEventListener('click', (e) => {
            const btn = e.target.closest('.lang-btn');
            if (btn) {
                const lang = btn.dataset.lang;
                this.setLanguage(lang);
            }
        });

        this.updateSwitcher();
    },

    updateSwitcher() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === this.currentLang);
        });
    }
};

// Export for form to use translations
window.i18n = i18n;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    i18n.init();
});
