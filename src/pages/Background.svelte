<script>
  import PageHeader from '../components/PageHeader.svelte';
  import SectionHeader from '../components/SectionHeader.svelte';
</script>

<section class="page-shell">
  <PageHeader 
    title="Background" 
    subtitle="Understanding the <em>lac operon</em> and gene regulatory circuits"
  />

  <div class="content surface-card">
    <!-- Introduction -->
    <div class="section">
      <SectionHeader title="Introduction" />
      <p>
        Understanding gene regulatory circuits is crucial to the advancement of the knowledge of the fundamentals of life, 
        developing applications in biotechnology, and facilitating advances in medicine by elucidating disease mechanisms.<sup>1</sup>
        Gene regulatory circuits are often modeled mathematically with systems of differential equations to gain a better 
        understanding of how complex factors influence gene expression.<sup>1</sup> Modeling a simple gene regulatory circuit, 
        such as the regulation of the <em>lac operon</em> in <em>E. coli</em>, can aid in the understanding of how more complex gene 
        regulatory circuits function.
      </p>

      <h4>The <em>lac operon</em> Structure</h4>
      <p>
        The structural genes of the <em>lac operon</em> are involved in the metabolism of lactose and include:
      </p>
      <ul>
        <li><strong>lac Z</strong> — codes for β-galactosidase (an enzyme that breaks lactose into glucose and galactose for further metabolism)</li>
        <li><strong>lac Y</strong> — encodes a lactose permease</li>
        <li><strong>lac A</strong> — encodes a transacetylase</li>
      </ul>
      <p>
        To conserve resources, the cell does not transcribe these genes at all until lactose is present and does not quickly 
        transcribe these genes while glucose is present.<sup>2</sup>
      </p>

      <figure class="figure">
        <div class="placeholder-image">
          <img src="/QBE_Project/lac-operon-diagram.jpg" alt="Lac operon structure in E. coli" />
        </div>
        <figcaption>A representation of the <em>lac operon</em> in <em>E. coli</em></figcaption>
      </figure>
    </div>

    <!-- Methods -->
    <div class="section">
      <SectionHeader title="Methods" />
      <p>
        To model the <em>lac operon</em>, the delays due to transcription (τ<sub>M</sub>) and translation (τ<sub>B</sub>) had to be 
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

      <h4>Challenges & Solutions</h4>
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

      <p>
        Once these issues were resolved, the three variables could be plotted against each other or against time to complete the model.
      </p>
    </div>

    <!-- References -->
    <div class="section">
      <SectionHeader title="References" />
      <ol class="references">
        <li>M. Gómez-Schiavon et al., The art of modeling gene regulatory circuits, <em>npj Syst. Biol. Appl.</em> <strong>2024</strong>, 10</li>
        <li>F. Jacob, J. Monod, Gene regulatory mechanisms in the synthesis of proteins, <em>J. Mol. Biol.</em> <strong>1961</strong>, 3, 3, 318-356</li>
        <li>N. Yildirim et al., Dynamics and bistability in a reduced model of the <em>lac operon</em>, <em>Chaos</em>. <strong>2004</strong>, 14, 2, 279-292</li>
      </ol>
    </div>

    <!-- Acknowledgements -->
    <div class="section">
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

  ul, ol {
    color: var(--text);
    line-height: 1.8;
    margin: 1rem 0;
    padding-left: 2rem;
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

  .references {
    list-style: decimal;
  }

  .references li {
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    .content {
      padding: 1.5rem;
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
