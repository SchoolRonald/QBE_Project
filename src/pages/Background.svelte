<script>
  import PageHeader from '../components/PageHeader.svelte';
  import SectionHeader from '../components/SectionHeader.svelte';
  import { ROUTES } from '../config/constants';
</script>

<section class="page-shell">
  <PageHeader 
    title="Background" 
    subtitle="Understanding the <em>lac</em> operon and gene regulatory circuits"
  />

  <div class="content surface-card">
    <!-- Introduction -->
    <div class="section">
      <SectionHeader title="Introduction" />
      <p>
        Understanding gene regulatory circuits is key to the advancement of the knowledge of the fundamentals of life, 
        developing applications in biotechnology, and facilitating advances in medicine by elucidating disease mechanisms.<sup>1</sup>
        Gene regulatory circuits are often modeled mathematically with systems of differential equations to gain a better 
        understanding of how complex factors influence gene expression.<sup>1</sup> Modeling a simple gene regulatory circuit, 
        such as the regulation of the <em>lac</em> operon in <em>E. coli</em>, can aid in the understanding of how more complex gene 
        regulatory circuits function.
      </p>

      <h4>The <em>lac</em> operon Structure</h4>
      <p>
        The structural genes of the <em>lac</em> operon are involved in the metabolism of lactose and include:
      </p>
      <ul>
        <li><em>lacZ</em> — codes for β-galactosidase (an enzyme that breaks lactose into glucose and galactose for further metabolism)</li>
        <li><em>lacY</em> — encodes a lactose permease</li>
        <li><em>lacA</em> — encodes a transacetylase</li>
      </ul>
      <p>
        To conserve resources, the cell does not transcribe these genes at all until lactose is present and does not quickly 
        transcribe these genes while glucose is present.<sup>2</sup>
      </p>

      <figure class="figure">
        <div class="placeholder-image">
          <img src="/QBE_Project/lac-operon-diagram.jpg" alt="Lac operon structure in E. coli" />
        </div>
        <figcaption>A representation of the <em>lac</em> operon in <em>E. coli</em></figcaption>
      </figure>
    </div>

    <!-- Methods -->
    <div class="section">
      <SectionHeader title="Methods" />
      <p>
        To model the <em>lac</em> operon, the delays due to transcription (τ<sub>M</sub>) and translation (τ<sub>B</sub>) had to be 
        accounted for within the numerical integration tool used to solve the system of three equations. Numerical solvers for 
        systems of ordinary differential equations imported from SciPy such as <code>odeint</code> would not be sufficient to 
        address the problem. To consider the model properly as a delayed differential equation (DDE), the import <code>ddeint</code> 
        was the primary tool for tabulating steady-state solutions with respect to time.
      </p>

      <h4>Implementation</h4>
      <p>
        In a Python Notebook, model parameters and initial conditions were stored to be modified for sensitivity analysis. 
        A model containing the system of three DDEs was described in a function that <code>ddeint</code> would use as input 
        for generating solution values.
      </p>

      <p>
        Once the model was implemented, the three variables could be plotted against each other or against time to complete the model.
      </p>
  </div>

  <p class="references-note">See <a class="pill-link" href="#/model#references">References</a> and <a class="pill-link" href="#/model#acknowledgements">Acknowledgements</a> on the Model page for full citations and credits.</p>
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

  li {
    margin-bottom: 0.5rem;
  }

  em {
    font-style: italic;
    color: var(--text-secondary);
  }

  code {
    background: rgba(255, 255, 255, 0.06);
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    font-size: 0.9em;
    color: var(--cyan-bright);
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

  .references-note {
    color: var(--muted);
    font-size: 0.95rem;
    margin: 0 3rem 2rem;
  }

  .pill-link {
    display: inline-block;
    padding: 0.1rem 0.45rem;
    border-radius: 999px;
    background: rgba(255, 215, 0, 0.15);
    color: var(--text);
    text-decoration: none;
    font-weight: 600;
    transition: background 0.2s ease, color 0.2s ease;
  }

  .pill-link:hover {
    background: rgba(255, 215, 0, 0.3);
    color: var(--text-bright);
  }

  @media (max-width: 768px) {
    .content {
      padding: 1.5rem;
    }
  }
</style>
