<script>
  import { onMount } from 'svelte';
  import PageHeader from '../components/PageHeader.svelte';
  import SectionHeader from '../components/SectionHeader.svelte';
  import { ROUTES } from '../config/constants';

  const equations = `$$ \\begin{align} \\frac{d\\mathrm{M}}{d\\mathrm{t}} &= \\alpha_{M}\\frac{1 + K_{1}(\\mathrm{e}^{-\\mu\\tau_{M}}A_{\\tau_M})^n}{K + K_{1}(\\mathrm{e}^{-\\mu\\tau_{M}}A_{\\tau_M})^n} - \\tilde{\\gamma}_{M} M \\tag{1} \\\\ \\frac{d\\mathrm{B}}{d\\mathrm{t}} &= \\alpha_{B} \\mathrm{e}^{-\\mu \\tau_{B}} M_{\\tau_B} - \\tilde{\\gamma}_{B} B \\tag{2} \\\\ \\frac{d\\mathrm{A}}{d\\mathrm{t}} &= \\alpha_{A} B \\frac{L}{K_{L} + L} - \\beta_{A} B \\frac{A}{K_{A} + A} - \\tilde{\\gamma}_{A} A \\tag{3} \\end{align} $$`;
  
  onMount(() => {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
    const hash = window.location.hash || '';
    const parts = hash.split('#');
    const anchor = parts[2] || null;
    if (anchor) {
      const el = document.getElementById(anchor);
      if (el) {
        // allow Svelte to render before scrolling
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
      }
    }
  });
</script>

<section class="page-shell">
  <PageHeader 
    title="Model" 
    subtitle="Mathematical modeling of the <em>lac</em> operon using delayed differential equations"
  />

  <div class="content surface-card">
    <!-- Model Description -->
    <div class="section">
      <SectionHeader title="Three-Variable DDE Model" />
      <p>
        We chose a model of three differential equations from Yildirim et al.<sup>3</sup> This model utilizes delay differential 
        equations (DDEs), which explicitly account for time delays in biological processes. In the <em>lac</em> operon, transcription and 
        translation are not instantaneous, so the current production of mRNA and β-galactosidase depends on concentrations at earlier times.
      </p>
      <p>
        Below we present the three-variable DDE system used in our analysis and discuss each term in biological context.
      </p>

      <h4>Model Variables</h4>
      <p>Our model is composed of the following three quantities:</p>
      <ul>
        <li><strong>M (mRNA concentration)</strong> — measured in nM</li>
        <li><strong>B (β-galactosidase concentration)</strong> — measured in nM</li>
        <li><strong>A (allolactose concentration)</strong> — measured in nM</li>
      </ul>

      <h4>The Three-Variable DDE System</h4>
      <div class="math">
        {@html equations}
      </div>

      <h4>Key Parameters</h4>
      <p>
        γ̃<sub>N</sub> = γ<sub>N</sub> + μ<sub>N</sub>, where γ̃<sub>N</sub> corresponds to the loss of mRNA, β-galactosidase, 
        and allolactose respectively due to degradation and dilution due to bacterial growth.
      </p>
      <ul>
        <li><strong>τ<sub>M</sub></strong> — A constant that represents the time delay of mRNA production due to transcription of mRNA from DNA (must be > 0)</li>
        <li><strong>τ<sub>B</sub></strong> — A constant that represents the time delay of β-galactosidase production due to translation from mRNA (must be > 0)</li>
        <li><strong>A/(K + A)</strong> — The production rate of mRNA is proportional to the fraction of free operator sites</li>
      </ul>

      <h4>Model Terms</h4>
      <p>
        The term M(t − τ<sub>B</sub>) captures that β-galactosidase synthesis at time t depends on prior mRNA levels after a translation delay τ<sub>B</sub>.
      </p>
      <p>
        The κB term models the production of allolactose from the reaction catalyzed by β-galactosidase to produce allolactose 
        from lactose.
      </p>
      <p>
        The (μ + γ)A term models the loss of allolactose from the reverse reaction, where β-galactosidase catalyzes the reaction 
        to form glucose and galactose from allolactose.
      </p>

      <h4>Challenges & Solutions</h4>
      <p>During our modeling work, we encountered and resolved several technical issues:</p>
      <table class="solutions-table">
        <thead>
          <tr>
            <th>Model Issue</th>
            <th>Solution(s)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Extremely quick allolactose kinetics compared to other concentrations leading to uncharacteristic spikes</td>
            <td>Reduced dt</td>
          </tr>
          <tr>
            <td>Negative concentrations resulting in poor references and unrealistic results</td>
            <td>Refined data before presentation, by setting negative values close to zero to zero; References to previous time values would select zero if greater than the concentration</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Beta-galactosidase Dependence -->
    <div class="section">
      <SectionHeader title="Dependence on β-galactosidase (B) Concentration" />
      <p>
        The activation of the <em>lac</em> operon is strictly dependent on the concentration of Beta-galactosidase (B), as illustrated by 
        the phase plane plot. This projection reveals a critical mathematical tipping point determined by the balance between 
        allolactose (A) and enzyme levels. Below this threshold, the enzyme concentration is insufficient to generate the allolactose 
        (A) required to sustain induction, causing the system to collapse back to the uninduced "off" state. Conversely, when the 
        initial concentration (B) exceeds this limit, it triggers a positive feedback loop that rapidly drives the system toward 
        the fully induced "on" state.
      </p>

      <figure class="figure">
        <div class="placeholder-image">
          <img src="/QBE_Project/phase-plane-b-concentration.jpg" alt="Phase plane plot showing B concentration dependence" />
        </div>
        <figcaption>Phase plane plot demonstrating the critical threshold for β-galactosidase concentration</figcaption>
      </figure>
    </div>

    <!-- Bistability -->
    <div class="section">
      <SectionHeader title="Bistability Analysis" />
      <p>
        To prove the system is bistable, we simulated the time evolution of Beta-galactosidase from six different starting points 
        (ranging from 0.6 nM to 1.6 nM) with external lactose held constant. The plot shows a clear split where the trajectories 
        diverge into two groups: the lower starting values (0.6, 0.8, 1.0 nM) drop down to the repressed state, while the higher 
        values (1.2, 1.4, 1.6 nM) rise to the induced state. This confirms that the model allows for two stable outcomes under 
        identical conditions.
      </p>

      <h4>Biological Significance</h4>
      <p>
        Biologically, this sensitivity creates a form of cellular memory. Because the final outcome depends on the system's history, 
        the cell effectively locks its decision to be either induced or repressed. This ensures the bacteria remain committed to a 
        specific metabolic strategy, preventing inefficient fluctuations even when environmental conditions stay the same.
      </p>

      <figure class="figure">
        <div class="placeholder-image">
          <img src="/QBE_Project/bistability-trajectories.jpg" alt="Bistability plot showing diverging trajectories" />
        </div>
        <figcaption>Time evolution of β-galactosidase concentration from six different initial conditions, demonstrating bistability</figcaption>
      </figure>
    </div>

    <!-- Conclusions -->
    <div class="section">
      <SectionHeader title="Conclusions" />
      <p>
        The delayed differential equation model representing the gene regulatory circuit for the <em>lac</em> operon in <em>E. coli</em>, developed by 
        Yildirim et al.<sup>3</sup>, was successfully integrated using <code>ddeint</code> and visualized across diverse initial conditions. This analysis 
        revealed bistability: the circuit "turns on" when sufficient lactose is present to be metabolized and "turns off" when lactose is 
        absent, conserving resources. This highlights that the <em>lac</em> operon acts like a genetic switch: its transcriptional state 
        depends on environmental inputs and system history. This workflow can be repeated to investigate more complex regulatory systems, including those in 
        complex eukaryotes, to gain insights into gene expression mechanisms.
      </p>
      <h4>Next Steps</h4>
      <p>
        To further validate that this model accurately captures the <em>lac</em> operon gene regulatory circuit, experimental data could be collected by 
        measuring <em>lac</em> operon mRNA transcripts over time under varying initial lactose levels and comparing results to model predictions. A similar 
        modeling approach could be extended to more complex circuits—such as those in eukaryotes—to improve our understanding of cell cycle regulation, cell 
        differentiation, cell–cell and cell–environment interactions, and disease mechanisms.<sup>1</sup>
      </p>
    </div>

    <div class="section" id="references">
      <SectionHeader title="References" />
      <ol class="references">
        <li>M. Gómez-Schiavon et al., The art of modeling gene regulatory circuits, <em>npj Syst. Biol. Appl.</em> <strong>2024</strong>, 10</li>
        <li>F. Jacob, J. Monod, Gene regulatory mechanisms in the synthesis of proteins, <em>J. Mol. Biol.</em> <strong>1961</strong>, 3, 3, 318-356</li>
        <li>N. Yildirim et al., Dynamics and bistability in a reduced model of the <em>lac</em> operon, <em>Chaos</em>. <strong>2004</strong>, 14, 2, 279-292</li>
      </ol>
    </div>

    <div class="section" id="acknowledgements">
      <SectionHeader title="Acknowledgements" />
      <p>We gratefully acknowledge Dr. Beeler for guidance and support throughout this project. We also thank James Slopey for providing the template for this website.</p>
    </div>
  </div>

</section>

<style>
  .content {
    padding: 3rem;
  }

  .section {
    margin-bottom: 3rem;
  }

  .section:last-child {
    margin-bottom: 0;
  }

  h4 {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--text-bright);
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
  }

  p {
    color: var(--text);
    line-height: 1.8;
    margin: 1rem 0;
  }

  ul {
    color: var(--text);
    line-height: 1.8;
    margin: 1rem 0;
    padding-left: 2rem;
  }

  .references {
    list-style: decimal;
    padding-left: 2rem;
  }

  .references li {
    margin-bottom: 1rem;
    color: var(--text);
  }

  li {
    margin-bottom: 0.5rem;
  }

  strong {
    color: var(--text-bright);
    font-weight: 600;
  }

  em {
    font-style: italic;
    color: var(--text-secondary);
  }

  sup {
    font-size: 0.8em;
    vertical-align: super;
    color: var(--accent);
  }

  sub {
    font-size: 0.8em;
    vertical-align: sub;
  }

  .math {
    margin: 1rem 0;
  }

  .figure {
    margin: 2rem 0;
    text-align: center;
  }

  .placeholder-image {
    background: rgba(255, 255, 255, 0.04);
    border: 2px dashed var(--border-medium);
    border-radius: 12px;
    padding: 2rem;
    margin-bottom: 1rem;
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .placeholder-image img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }

  figcaption {
    color: var(--muted);
    font-size: 0.95rem;
    font-style: italic;
  }

  .solutions-table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5rem 0;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid var(--border-medium);
    border-radius: 8px;
    overflow: hidden;
  }

  .solutions-table th {
    background: rgba(212, 175, 55, 0.1);
    padding: 1rem;
    text-align: left;
    color: var(--accent-bright);
    font-weight: 600;
    border-bottom: 1px solid var(--border-accent);
  }

  .solutions-table td {
    padding: 1rem;
    border-bottom: 1px solid var(--border-medium);
    color: var(--text);
  }

  .solutions-table tr:last-child td {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    .content {
      padding: 1.5rem;
    }

    .placeholder-image {
      min-height: 200px;
    }

    .solutions-table {
      font-size: 0.9rem;
    }

    .solutions-table th,
    .solutions-table td {
      padding: 0.75rem;
    }
  }

</style>
